#!/usr/bin/env python3

denylist = ["exec", "eval", "import"]

def calc(text:str) -> str:
    for hack in denylist:
        if hack in text:
            return "Hi, Hacker !!!"
    return str(eval(text))

if __name__ == "__main__":
    print(f"{'-'*10}Calculator{'-'*10}")
    while True:
        print(calc(input("<+> ")))