FROM node:16
ENV NODEUNBUFFERED 1
WORKDIR /app
ADD . /app/
COPY ./requirements.txt /app/requirements.txt
RUN npm install requirements.txt
COPY . /app/