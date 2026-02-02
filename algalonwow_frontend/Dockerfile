FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

# On utilise npx pour forcer la recherche dans le dossier local de docker
CMD ["npx", "vite", "--host", "0.0.0.0"]