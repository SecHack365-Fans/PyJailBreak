import requests
import urllib.parse
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


def http_attack(data, protocol, method):
    try:
        status = "safe"
        wtime = 1
        response = ""
        if method == "GET":
            # ペイロード送信, 応答取得
            for p in data["payload"]:
                response += requests.get(
                    f'{protocol}://{data["endpoint"]["domain"]}:{data["endpoint"]["port"]}?{p}',
                    timeout=wtime,
                ).text
        if method == "POST":
            # ペイロード送信, 応答取得
            for p in data["payload"]:
                response += requests.post(
                    f'{protocol}://{data["endpoint"]["domain"]}:{data["endpoint"]["port"]}',
                    data=urllib.parse.parse_qs(p),
                    timeout=wtime,
                ).text
        # 期待していない文字列を検証
        for u in data["unexpected"]:
            if u in response:
                status = data["severity"]
        # 結果を返す
        return jsonify({"success": True, "severity": status})
    except:
        return jsonify({"success": False, "severity": "serverError"})


def socket_attack(data):
    try:
        status = "safe"
        wtime = 0.2
        # 検証先に接続
        io = remote(data["endpoint"]["domain"], data["endpoint"]["port"])
        # io = remote("localhost", data["endpoint"]["port"]) # デモ用制限
        # 初期応答取得
        response = io.recvrepeat(wtime).decode()
        # ペイロード送信, 応答取得
        for p in data["payload"]:
            io.sendline(p.encode())
            response += io.recvrepeat(wtime).decode()
        # 期待していない文字列を検証
        for u in data["unexpected"]:
            if u in response:
                status = data["severity"]
        # 検証先の接続を閉じる
        io.close()
        return jsonify({"success": True, "severity": status})
    except:
        try:
            io.close()
        except:
            pass
        return jsonify({"success": False, "severity": "serverError"})


@app.route("/scan", methods=["POST"])
def scan():
    try:
        # POST Data 取得
        data = request.get_json()
        # 検証対象の振り分け
        match data["endpoint"]["protocol"]:
            case "nc":
                return socket_attack(data)
            case "http_get":
                return http_attack(data, "http", "GET")
            case "http_post":
                return http_attack(data, "http", "POST")
            case "https_get":
                return http_attack(data, "https", "GET")
            case "https_post":
                return http_attack(data, "https", "POST")
    except:
        return jsonify({"success": False, "severity": "serverError"})


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8080)
