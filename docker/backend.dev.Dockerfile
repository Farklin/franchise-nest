FROM node:23-alpine

WORKDIR /app

# Устанавливаем необходимые пакеты для сборки
RUN apk add --no-cache python3 make g++ gcc

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем все зависимости
RUN npm ci

# Пересобираем bcrypt для текущей платформы
RUN npm rebuild bcrypt --build-from-source

CMD ["npm", "run", "start:dev"] 