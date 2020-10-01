FROM node:12.18.4-alpine

RUN mkdir /app
WORKDIR /app

COPY app.js . 
COPY LICENSE .
COPY package.json .
COPY README.md .

RUN npm install 

CMD ["node", "app.js"]
