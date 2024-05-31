FROM node:22.2.0-alpine3.20
ENV PORT=5000

WORKDIR /app
COPY . .

COPY package.json .
RUN npm install

EXPOSE $PORT
CMD npm run start