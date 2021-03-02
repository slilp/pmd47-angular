FROM node:12.18-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm i -g @angular/cli
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 4200
CMD ng serve --port 4200 --host 0.0.0.0
