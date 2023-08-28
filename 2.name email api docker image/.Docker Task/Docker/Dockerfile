FROM alpine:latest

RUN apk add --no-cache nodejs

WORKDIR /app

COPY . /app

EXPOSE 8006

ENTRYPOINT [ "node" ]

CMD ["node_api.js"]