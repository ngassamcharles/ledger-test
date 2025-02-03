FROM mcr.microsoft.com/playwright:v1.50.0-noble

WORKDIR /app
COPY package*.json ./
COPY . .

RUN npm install
