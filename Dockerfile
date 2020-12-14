FROM node:15.3.0-buster-slim
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*","./"]

RUN npm install --production

COPY . .
EXPOSE 8080

CMD ["npm", "start"]