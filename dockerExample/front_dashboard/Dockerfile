FROM node:26-alpine

WORKDIR /app

RUN mkdir -p /app/src


COPY ./src ./src
COPY ./index.html /app/.
COPY ./vite.config.js /app/.
COPY ./package.json /app/.

RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev"]
