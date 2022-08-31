from pwn import *
from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route("/scan", methods=["POST"])
def scan():
    try:
        status = "safe"
        # POST Data 取得
        data = request.get_json()
        # 検証先に接続
        io = remote(data["endpoint"][0], data["endpoint"][1])
        # 初期応答取得
        response = io.recvrepeat(0.1).decode()
        # ペイロード送信&応答取得
        for p in data["payloads"]:
            io.sendline(p.encode())
            response += io.recvrepeat(0.1).decode()
        # 期待していない文字列を検証
        for u in data["unexpecteds"]:
            if u in response:
                status = data["risk"]
        # 検証先の接続を閉じる
        io.close()
    except:
        return jsonify({"success": False, "severity": "unknown"})
    return jsonify({"success": True, "severity": status})

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8080)