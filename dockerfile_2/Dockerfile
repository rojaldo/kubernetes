# an alpine image with httpd server 
FROM alpine:3.21.3
RUN apk add --no-cache apache2 && \
    mkdir -p /var/www/localhost/htdocs && \
    chown -R apache:apache /var/www/localhost/htdocs && \
    chmod -R 755 /var/www/localhost/htdocs
COPY ./content /var/www/localhost/htdocs/
VOLUME /var/www/localhost/htdocs
EXPOSE 80
CMD ["httpd", "-D", "FOREGROUND"]