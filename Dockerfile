# Utilizar la versión específica de Node.js
FROM node:21.7.1-alpine

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el archivo package.json y yarn.lock al directorio de trabajo
COPY package.json yarn.lock ./

# Instalar dependencias
RUN yarn install --frozen-lockfile

# Copiar el resto de los archivos del proyecto al directorio de trabajo
COPY . .

# Construir la aplicación
RUN yarn build

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["yarn", "start"]
