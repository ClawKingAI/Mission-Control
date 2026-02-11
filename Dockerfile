FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Build frontend
WORKDIR /app/frontend
RUN npm run build

# Run backend
WORKDIR /app/backend
EXPOSE 5000
CMD ["node", "server.js"]