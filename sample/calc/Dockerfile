FROM python:3.10.5-alpine

RUN apk --no-cache add socat
RUN adduser -D satoki

ADD app.py /home/satoki/app.py
RUN chmod 500 /home/satoki/app.py
RUN chown satoki:root /home/satoki -R

USER satoki
WORKDIR /home/satoki/
CMD socat TCP-L:4444,fork,reuseaddr EXEC:"python3 ./app.py",stderr