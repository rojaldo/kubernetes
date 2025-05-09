# Etapa 1: Build de la aplicación Angular
FROM node:20 AS build

# Instalar Git
RUN apt-get update && apt-get install -y git

# Establecer el directorio de trabajo
WORKDIR /app

# Clonar el repositorio de Angular (reemplaza con la URL de tu repositorio)
# Asegúrate de que la rama o tag corresponda a Angular 19
RUN git clone --depth 1 --branch main https://gitlab.com/danielrojo/ng19.git .
# O si tienes tu propio repositorio:
# RUN git clone https://tu-repositorio-angular.git .

# Instalar dependencias de Angular CLI y del proyecto
# Asumiendo que tu proyecto ya tiene un package.json con Angular 19
RUN npm install -g @angular/cli@19
RUN npm install

# Construir la aplicación para producción
# Reemplaza 'nombre-de-tu-app' si es necesario, o ajusta el comando de build según tu package.json
RUN ng build --configuration production

# Etapa 2: Servir la aplicación con Nginx
FROM nginx:alpine

# Copiar los artefactos de la build de la etapa anterior al directorio web de Nginx
COPY --from=build /app/dist/ng19/browser /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Comando por defecto para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]