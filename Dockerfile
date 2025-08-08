FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["npx", "nodemon", "server.js"]

# docker build -t restmancer-app .
# docker run -d -p 3000:3000 --name restMancer-container restmancer-app
#docker stop RestMancer
