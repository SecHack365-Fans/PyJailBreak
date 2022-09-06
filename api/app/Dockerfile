FROM python:3.10

RUN mkdir /var/www
WORKDIR /var/www

COPY requirements.txt .

RUN pip3 install -r requirements.txt

CMD ["uwsgi", "--ini", "/var/www/uwsgi.ini"]