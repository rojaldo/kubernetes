# a dockerfile to run a node application
FROM node:24.0.0-alpine3.20
# set the working directory to /app
WORKDIR /app
# copy the current directory contents into the container at /app
COPY . .
# install any needed packages specified in requirements.txt
RUN npm install
# build the app for production with minification
RUN npm run build
# make port 80 available to the world outside this container
EXPOSE 80
# define environment variable
ENV NODE_ENV=production
# run the app when the container launches
CMD ["npm", "start"]

