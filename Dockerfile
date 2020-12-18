FROM node:15.3.0-buster-slim
ENV NODE_ENV=production

LABEL maintainer="Christian Glassiognon <Christian.Glassiognon@techtonic.com>"

WORKDIR /app

COPY ["package.json", "package-lock.json*","./"]

RUN npm install --production

COPY . .
EXPOSE 8080

CMD ["npm", "start"]