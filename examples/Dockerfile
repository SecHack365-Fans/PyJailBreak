FROM python:3.10.5-alpine

RUN apk --no-cache add socat
RUN adduser -D satoki00
RUN chown satoki00:root /home/satoki00 -R

WORKDIR /home/satoki00/
USER satoki00

CMD ./run.sh