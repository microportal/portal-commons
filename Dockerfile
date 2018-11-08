FROM microportal/nginx-kong:latest

ENV SERVICE_NAME=portal-commons \
    SERVICE_URL=http://portal-commons:80/ \
    SERVICE_PATHS=/portal-commons

COPY release /usr/share/nginx/html