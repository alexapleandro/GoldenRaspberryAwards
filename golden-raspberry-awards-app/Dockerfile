FROM node:14.15.1-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . /app

RUN npm install --silent

CMD ng serve --host 0.0.0.0 --port 4200 --disable-host-check
