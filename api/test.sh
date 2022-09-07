#!/bin/bash

# POST /scan
# Example Data (critical)
##################################################
# {
#    "endpoint": {
#        "protocol": "socket",
#        "domain": "localhost",
#        "port": "4444"
#    },
#    "payload": ["help()","os",":!printenv"],
##    "unexpected": ["PyJailBreak_b981a35bde"],
#    "unexpected_option": "plain",
#    "severity": "critical"
# }
##################################################
# severity: safe, unknown, warning, critical
# payload_option: plain, eval
# unexpected_option: plain, regex, eval


# safe
curl -X POST -H 'Content-Type: application/json' http://localhost:8080/scan -d \
'{
    "endpoint": {
        "protocol": "socket",
        "domain": "localhost",
        "port": "4441"
    },
    "payload": ["77*77"],
    "unexpected": ["5929"],
    "severity": "safe"
}'
curl -X POST -H 'Content-Type: application/json' http://localhost:8080/scan -d \
'{
    "endpoint": {
        "protocol": "socket",
        "domain": "localhost",
        "port": "4441"
    },
    "payload": ["__import__(\"os\").system(\"printenv\")"],
    "unexpected": ["PyJailBreak_b981a35bde"],
    "unexpected_option": "plain",
    "severity": "critical"
}'

# warning
curl -X POST -H 'Content-Type: application/json' http://localhost:8080/scan -d \
'{
    "endpoint": {
        "protocol": "socket",
        "domain": "localhost",
        "port": "4441"
    },
    "payload": ["print(\"Satoki\")"],
    "unexpected": ["Satoki"],
    "unexpected_option": "plain",
    "severity": "warning"
}'

# critical
curl -X POST -H 'Content-Type: application/json' http://localhost:8080/scan -d \
'{
    "endpoint": {
        "protocol": "socket",
        "domain": "localhost",
        "port": "4443"
    },
    "payload": ["exec(chr(11+11+11+11+11+11+11+11+1+1+1+1+1+1+1)+chr(11+11+11+11+11+11+11+11+1+1+1+1+1+1+1)+chr(11+11+11+11+11+11+11+11+11+1+1+1+1+1+1)+chr(11+11+11+11+11+11+11+11+11+1+1+1+1+1+1+1+1+1+1)+chr(111+1)+chr(111)+chr(111+1+1+1)+chr(111+1+1+1+1+1)+chr(11+11+11+11+11+11+11+11+1+1+1+1+1+1+1)+chr(11+11+11+11+11+11+11+11+1+1+1+1+1+1+1)+chr(11+11+11+1+1+1+1+1+1+1)+chr(11+11+11+1+1+1+1+1+1)+chr(111)+chr(111+1+1+1+1)+chr(11+11+11+1+1+1+1+1+1)+chr(11+11+11+1+1+1+1+1+1+1+1)+chr(11+11+11+11+1+1)+chr(111+1+1+1+1)+chr(111+1+1+1+1+1+1+1+1+1+1)+chr(111+1+1+1+1)+chr(111+1+1+1+1+1)+chr(11+11+11+11+11+11+11+11+11+1+1)+chr(11+11+11+11+11+11+11+11+11+1+1+1+1+1+1+1+1+1+1)+chr(11+11+11+1+1+1+1+1+1+1)+chr(11+11+11+1+1+1+1+1+1)+chr(111+1)+chr(111+1+1+1)+chr(11+11+11+11+11+11+11+11+11+1+1+1+1+1+1)+chr(11+11+11+11+11+11+11+11+11+11)+chr(111+1+1+1+1+1)+chr(11+11+11+11+11+11+11+11+11+1+1)+chr(11+11+11+11+11+11+11+11+11+11)+chr(111+1+1+1+1+1+1+1)+chr(11+11+11+1+1+1+1+1+1)+chr(11+11+11+1+1+1+1+1+1+1+1))"],
    "unexpected": ["PyJailBreak_b981a35bde"],
    "unexpected_option": "plain",
    "severity": "critical"
}'

curl -X POST -H 'Content-Type: application/json' http://localhost:8080/scan -d \
'{
    "endpoint": {
        "protocol": "socket",
        "domain": "localhost",
        "port": "4444"
    },
    "payload": ["help()","os",":!printenv"],
    "unexpected": ["PyJailBreak_b981a35bde"],
    "unexpected_option": "plain",
    "severity": "critical"
}'

# unexpected_option regex
curl -X POST -H 'Content-Type: application/json' http://localhost:8080/scan -d \
'{
    "endpoint": {
        "protocol": "socket",
        "domain": "localhost",
        "port": "4441"
    },
    "payload": ["77*77"],
    "unexpected": ["[259]{4}"],
    "unexpected_option": "regex",
    "severity": "critical"
}'

# unexpected_option eval
curl -X POST -H 'Content-Type: application/json' http://localhost:8080/scan -d \
'{
    "endpoint": {
        "protocol": "socket",
        "domain": "localhost",
        "port": "4441"
    },
    "payload": ["77*77"],
    "unexpected": ["77*77"],
    "unexpected_option": "eval",
    "severity": "critical"
}'

# payload_option eval
curl -X POST -H 'Content-Type: application/json' http://localhost:8080/scan -d \
'{
    "endpoint": {
        "protocol": "socket",
        "domain": "localhost",
        "port": "4441"
    },
    "payload": ["[i for i in range(100)] #import"],
    "payload_option": "eval",
    "unexpected": ["[0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"],
    "unexpected_option": "plain",
    "severity": "critical"
}'

# http (Error)
curl -X POST -H 'Content-Type: application/json' http://localhost:8080/scan -d \
'{
    "endpoint": {
        "protocol": "http_get",
        "domain": "localhost",
        "port": "4445"
    },
    "payload": ["q=<script>","q=<script>&s=alert(1)</script>"],
    "unexpected": ["<script>alert(1)</script>"],
    "unexpected_option": "plain",
    "severity": "critical"
}'