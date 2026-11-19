# Usamos una imagen oficial de Node.js con soporte vigente
FROM node:22-slim

# Definimos /app como directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos todos los archivos del proyecto al directorio de trabajo
COPY . .

# Instalamos las dependencias declaradas en package.json
RUN npm install

# Indicamos que la aplicación escucha en el puerto 3000
EXPOSE 3000

# Comando que se ejecuta al iniciar el contenedor
CMD ["npm", "start"]