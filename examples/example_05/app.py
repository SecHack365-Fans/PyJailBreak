#!/usr/bin/env python3

from re import template
from flask import Flask, request, render_template_string

app = Flask(__name__)

@app.route("/")
def index_get():
    name = request.args.get("name", "satoki")
    template = f"""
こんにちは{name}さん。<br>
このサイトは脆弱ですか？<br>
"""
    return render_template_string(template)


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=4445)