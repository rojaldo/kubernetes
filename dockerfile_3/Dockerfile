FROM ubuntu:25.04
RUN apt-get update && apt-get install -y figlet && \
    apt-get install -y curl jq
ENV ID=24
# get endpoint https://chiquitadas.es/api/quote/{ID} and print {quote} with figlet
ENTRYPOINT curl -s https://chiquitadas.es/api/quote/$ID | jq -r '.quote' | figlet -f slant -c