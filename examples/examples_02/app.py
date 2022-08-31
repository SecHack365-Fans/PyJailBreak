#!/usr/bin/env python3
import string

denylist = string.ascii_letters

def calc(text:str) -> str:
    for hack in denylist:
        if hack in text:
            return "Hi, Hacker !!!"
    return str(eval(text))

if __name__ == "__main__":
    print(f"{'-'*10}Secure Calculator{'-'*10}")
    while True:
        print(calc(input("<SecCalc> ")))