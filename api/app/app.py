import re
import requests
import urllib.parse
from pwn import *
from flask_cors import CORS
from flask import Flask, jsonify, request

app = Flask(__name__)
CORS(
    app,
    origins=[
        "https://fans.sechack365.com",
        "https://sechack365-fans.github.io",
        "http://localhost:3000",
    ],
)


####################################################################################################
# Trueに設定するとpayload_option, unexpected_optionにregex及びevalが利用可能となる
# バックエンドサーバのReDoSおよびRCEが可能となるため、ローカルでのみの利用を推奨
privilege_mode = False
####################################################################################################


def response_check(response, unexpected, option):
    for u in unexpected:
        if privilege_mode and (option == "eval"):
            print(f"[unexpected_option: eval] eval({u})")
            if str(eval(u)) in response: # バックエンドサーバ内でのコード実行(注意)
                return True
        elif privilege_mode and (option == "regex"):
            print(f"[unexpected_option: regex] regex({u})")
            print(re.search(u, response))
            if re.search(u, response): # バックエンドサーバ内でのユーザ由来の正規表現(注意)
                return True
        else:
            if u in response:
                return True
    return False


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
        if response_check(response, data["unexpected"], data["unexpected_option"]):
            status = data["severity"]
        # 結果を返す
        return jsonify({"success": True, "severity": status})
    except Exception as e:
        return jsonify({"success": False, "severity": "unknown", "error": f"{str(e)}"})


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
        if response_check(response, data["unexpected"], data["unexpected_option"]):
            status = data["severity"]
        # 検証先の接続を閉じる
        io.close()
        return jsonify({"success": True, "severity": status})
    except Exception as e:
        try:
            io.close()
        except:
            pass
        return jsonify({"success": False, "severity": "unknown", "error": f"{str(e)}"})


@app.route("/scan", methods=["POST"])
def scan():
    try:
        # POST Data 取得
        data = request.get_json()
        # unexpected_option の確認
        data.setdefault("unexpected_option", "plain")
        # payload_option の確認
        data.setdefault("payload_option", "plain")
        # Payload の加工
        if privilege_mode and (data["payload_option"] == "eval"):
            for i in range(len(data["payload"])):
                print(f"[payload_option: eval] eval({data['payload'][i]})")
                data["payload"][i] = str(eval(data["payload"][i])) # バックエンドサーバ内でのコード実行(注意)
        # 検証対象の振り分け
        match data["endpoint"]["protocol"]:
            case "socket":
                return socket_attack(data)
            case "http_get":
                return http_attack(data, "http", "GET")
            case "http_post":
                return http_attack(data, "http", "POST")
            case "https_get":
                return http_attack(data, "https", "GET")
            case "https_post":
                return http_attack(data, "https", "POST")
            case _:
                return jsonify({"success": False, "severity": "unknown", "error": "request format error"})
    except Exception as e:
        return jsonify({"success": False, "severity": "unknown", "error": f"{str(e)}"})



if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8080)
