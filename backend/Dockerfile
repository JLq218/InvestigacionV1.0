# Imagen base
FROM node:18-alpine

# Crear directorio de trabajo
WORKDIR /app

# Copiar definición de dependencias
COPY package.json yarn.lock* package-lock.json* ./

# Instalar dependencias (Yarn si existe, si no usa NPM)
RUN if [ -f yarn.lock ]; then yarn install; else npm install; fi

# Copiar el resto del código
COPY . .

# Exponer el puerto de tu app (modificá si usás otro)
EXPOSE 3001

# Correr la app
CMD ["node", "index.js"]
