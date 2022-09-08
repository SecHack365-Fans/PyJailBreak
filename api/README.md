# PyJailBreak Backend

下記URLまたはローカルで実行したフロントエンドにおいて、Endpoint for PyJailBreak Serverとして本プログラムを指定してください。  
**[https://fans.sechack365.com/PyJailBreak/](https://fans.sechack365.com/PyJailBreak/)**  

## 起動

```sh
pip3 install -r ./app/requirements.txt
python3 ./app/app.py
```

## Dockerコンテナとして起動  

> **Note**
>
> バックエンドをDockerで動かす場合、`localhost`は`host.docker.internal`または`gateway.docker.internal`となります

```sh
docker-compose up
```
