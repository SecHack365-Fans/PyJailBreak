#!/usr/bin/env python3

# IMCTF 2021 printtext💘 改 #
# https://github.com/satoki/imctf_2021_satoki_writeups/tree/main/misc/printtext
import os
import sys

os.environ["PAGER"] = "cat" #No hitchhike :)

#print("""            _       _    __  _            _    __
# _ __  _ __(_)_ __ | |_ / / | |_ _____  _| |_  \ \\
#| '_ \| '__| | '_ \| __| |  | __/ _ \ \/ / __|  | |
#| |_) | |  | | | | | |_| |  | ||  __/>  <| |_   | |
#| .__/|_|  |_|_| |_|\__| |   \__\___/_/\_\\__|  | |
#|_|                     \_\                    /_/
#
#Can you evaluate `print(text)`?
#They don't seem to have the flag.
#""")

text = "I don't have the flag."

#allow_list = input("allow_list> ")[:9]
#print(f"your allow_list: {list(allow_list)}")
eval_code = input("eval_code> ")

#for c in eval_code:
#    if c not in allow_list:
if len(set(eval_code)) > 9: #PyJailBreak
        #print(f"Hi, {c}!")
        print(f"Hi, Hacker!") #PyJailBreak
        sys.exit()

print("Let’s roll!!")
eval(eval_code)