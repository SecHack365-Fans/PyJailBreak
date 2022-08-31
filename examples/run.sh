#!/bin/bash

# example_01:4441
socat TCP-L:4441,fork,reuseaddr EXEC:"python3 ./example_01/app.py",pty,stderr,setsid,sane,raw,echo=0 &

# example_02:4442
socat TCP-L:4442,fork,reuseaddr EXEC:"python3 ./example_02/app.py",pty,stderr,setsid,sane,raw,echo=0 &

# example_03:4443
socat TCP-L:4443,fork,reuseaddr EXEC:"python3 ./example_03/app.py",pty,stderr,setsid,sane,raw,echo=0 &

# example_04:4444
socat TCP-L:4444,fork,reuseaddr EXEC:"python3 ./example_04/app.py",pty,stderr,setsid,sane,raw,echo=0
