FROM ubuntu:25.04
RUN apt-get update && apt-get install -y figlet && \
    apt-get install -y python3 python3-pip && \ 
RUN pip3 install requests
ENV ID=24
# COPY scripts/script.py /home/app/script.py
WORKDIR /home/app
# get dependencies from requirements.txt and install them
RUN pip3 install -r requirements.txt
# create a user and group with the same name as the user running the container
RUN useradd -ms /bin/bash appuser
# switch to the user appuser
USER app1
ENTRYPOINT python3 /script.py $ID