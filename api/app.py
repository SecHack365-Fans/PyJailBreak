from pwn import *
from flask_cors import CORS
from flask import Flask, jsonify, request

app = Flask(__name__)
CORS(
    app,
    origins=[
        "https://fans.sechack365.com/",
        "https://sechack365-fans.github.io/",
        "http://localhost:3000",
    ],
)


@app.route("/scan", methods=["POST"])
def scan():
    try:
        status = "safe"
        # POST Data 取得
        data = request.get_json()
        # 検証先に接続
        io = remote(data["endpoint"]["domain"], data["endpoint"]["port"])
        # 初期応答取得
        response = io.recvrepeat(0.2).decode()
        # ペイロード送信&応答取得
        for p in data["payload"]:
            io.sendline(p.encode())
            response += io.recvrepeat(0.2).decode()
        # 期待していない文字列を検証
        for u in data["unexpected"]:
            if u in response:
                status = data["severity"]
        # 検証先の接続を閉じる
        io.close()
    except:
        return jsonify({"success": False, "severity": "serverError"})
    return jsonify({"success": True, "severity": status})


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8080)
