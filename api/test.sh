#!/bin/bash

# POST /scan
# Example Data (critical)
##################################################
# {
#    "endpoint": {
#        "domain": "localhost", 
#        "port": "4444"
#    },
#    "payload": ["help()", "os", ":!printenv"],
#    "unexpected": ["PyJailBreak_b981a35bde"],
#    "severity":"critical"
# }
##################################################
# risks: safe, unknown, ["critical", "warning"]
# envの文字列検証を行うことで、任意コード実行とファイル読み取りの両方を検知できる


# safe
curl -X POST -H 'Content-Type: application/json' http://localhost:8080/scan -d \
'{
    "endpoint": {
        "domain": "localhost", 
        "port": "4441"
    },
    "payload": ["77*77"],
    "unexpected": ["5929"],
    "severity":"safe"
}'
curl -X POST -H 'Content-Type: application/json' http://localhost:8080/scan -d \
'{
    "endpoint": {
        "domain": "localhost", 
        "port": "4441"
    },
    "payload": ["__import__(\"os\").system(\"printenv\")"], 
    "unexpected": ["PyJailBreak_b981a35bde"], 
    "severity":"critical"
}'

# warning
curl -X POST -H 'Content-Type: application/json' http://localhost:8080/scan -d \
'{
    "endpoint": {
        "domain": "localhost", 
        "port": "4441"
    },
    "payload": ["print(\"Satoki\")"], 
    "unexpected": ["Satoki"], 
    "severity":"warning"
}'

# critical
curl -X POST -H 'Content-Type: application/json' http://localhost:8080/scan -d \
'{
    "endpoint": {
        "domain": "localhost", 
        "port": "4443"
    },
    "payload": ["exec(chr(11+11+11+11+11+11+11+11+1+1+1+1+1+1+1)+chr(11+11+11+11+11+11+11+11+1+1+1+1+1+1+1)+chr(11+11+11+11+11+11+11+11+11+1+1+1+1+1+1)+chr(11+11+11+11+11+11+11+11+11+1+1+1+1+1+1+1+1+1+1)+chr(111+1)+chr(111)+chr(111+1+1+1)+chr(111+1+1+1+1+1)+chr(11+11+11+11+11+11+11+11+1+1+1+1+1+1+1)+chr(11+11+11+11+11+11+11+11+1+1+1+1+1+1+1)+chr(11+11+11+1+1+1+1+1+1+1)+chr(11+11+11+1+1+1+1+1+1)+chr(111)+chr(111+1+1+1+1)+chr(11+11+11+1+1+1+1+1+1)+chr(11+11+11+1+1+1+1+1+1+1+1)+chr(11+11+11+11+1+1)+chr(111+1+1+1+1)+chr(111+1+1+1+1+1+1+1+1+1+1)+chr(111+1+1+1+1)+chr(111+1+1+1+1+1)+chr(11+11+11+11+11+11+11+11+11+1+1)+chr(11+11+11+11+11+11+11+11+11+1+1+1+1+1+1+1+1+1+1)+chr(11+11+11+1+1+1+1+1+1+1)+chr(11+11+11+1+1+1+1+1+1)+chr(111+1)+chr(111+1+1+1)+chr(11+11+11+11+11+11+11+11+11+1+1+1+1+1+1)+chr(11+11+11+11+11+11+11+11+11+11)+chr(111+1+1+1+1+1)+chr(11+11+11+11+11+11+11+11+11+1+1)+chr(11+11+11+11+11+11+11+11+11+11)+chr(111+1+1+1+1+1+1+1)+chr(11+11+11+1+1+1+1+1+1)+chr(11+11+11+1+1+1+1+1+1+1+1))"], 
    "unexpected": ["PyJailBreak_b981a35bde"], 
    "severity":"critical"
}'

curl -X POST -H 'Content-Type: application/json' http://localhost:8080/scan -d \
'{
    "endpoint": {
        "domain": "localhost", 
        "port": "4444"
    },
    "payload": ["help()", "os", ":!printenv"], 
    "unexpected": ["PyJailBreak_b981a35bde"], 
    "severity":"critical"
}'

