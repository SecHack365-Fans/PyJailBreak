FROM ubuntu:20.04

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get -y update --fix-missing && apt-get -y upgrade
RUN apt-get -y install socat python3 python3-pip
RUN pip install Flask
RUN groupadd -r satoki00 && useradd -r -g satoki00 satoki00

WORKDIR /home/satoki00
RUN chown satoki00:root . -R

USER satoki00

CMD ./run.sh