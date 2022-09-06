FROM ubuntu:20.04

RUN mkdir /var/www
WORKDIR /var/www

ENV DEBIAN_FRONTEND noninteractive

COPY requirements.txt .

RUN apt-get -y update --fix-missing && apt-get -y upgrade
RUN apt-get -y install python3.10 \
                       python3-pip

RUN pip3 install -r requirements.txt

CMD ["uwsgi", "--ini", "/var/www/uwsgi.ini"]