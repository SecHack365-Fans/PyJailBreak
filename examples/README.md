# Vulnerable Server Examples

各やられサーバの一括起動  

```sh
docker-compose up
```

> **Warning**
>
> **[バックエンド](../api/)をDockerで動かす場合、`localhost`は`host.docker.internal`または`gateway.docker.internal`となります**

## examples_01

### 便利計算機アプリ

* Port: `4441`  

```sh
$ nc localhost 4441
----------Calculator----------
<+> 0xff + 0o77 + 0b11
321
<+> ord('A')
65
```

## examples_02

### 安全計算機アプリ

* Port:`4442`  

```sh
$ nc localhost 4442
----------Secure Calculator----------
<SecCalc> 0xff + 0o77 + 0b11
Hi, Hacker !!!
<SecCalc> 7*7
49
```

## examples_03

### [IMCTF 2021 printtext💘](https://github.com/satoki/imctf_2021_satoki_writeups/tree/main/misc/printtext)

* Port: `4443`  

```sh
$ nc localhost 4443
eval_code> print(text)
Let’s roll!!
I don't have the flag.
```

## examples_04

### [SECCON CTF 2021 hitchhike](https://ptr-yudai.hatenablog.com/entry/2021/12/19/232158#Misc-227pts-hitchhike)

* Port: `4444`  

```sh
$ nc localhost 4444
+---------------------------------------------------+
| The Answer to the Ultimate Question of Life,      |
|                the Universe, and Everything is 42 |
+---------------------------------------------------+
value 1: {b'6': 6666}
value 2: 1
Traceback (most recent call last):
  File "/PyJailBreak/examples/examples_04/app.py", line 19, in <module>
    if f(x) != 42:
  File "/PyJailBreak/examples/examples_04/app.py", line 11, in f
    return eval(f'{x} * {v}', {}, {})
  File "<string>", line 1, in <module>
TypeError: unsupported operand type(s) for *: 'dict' and 'int'
```
