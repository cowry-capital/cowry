FROM node:10-slim

RUN npm install -g blockchain-wallet-service

EXPOSE 3000

CMD ["nohup","blockchain-wallet-service","start","--port","3000","--bind","0.0.0.0","&"]