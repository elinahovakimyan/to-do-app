FROM node:8

ADD . /app

RUN \
  npm set progress=false && \
  cd /app && \
  npm i -g serve && \
  npm install --quiet && \
  npm run build

WORKDIR /app

CMD serve -s build

EXPOSE 5000
