FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3055
CMD [ "npm" , "run", "start:dev"]