#!/bin/sh

# examples_01:4441
socat TCP-L:4441,fork,reuseaddr EXEC:"python3 ./examples_01/app.py",stderr &

# examples_02:4442
socat TCP-L:4442,fork,reuseaddr EXEC:"python3 ./examples_02/app.py",stderr &

# examples_03:4443
socat TCP-L:4443,fork,reuseaddr EXEC:"python3 ./examples_03/app.py",stderr &

# examples_04:4444
socat TCP-L:4444,fork,reuseaddr EXEC:"python3 ./examples_04/app.py",stderr

