FROM node:10

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 5000
CMD [ "node", "app.js" ]



# docker network create <network name>

# docker build . -t node:express
# docker run -p 5000:5000
# docker stop <container id>
# docker network connect <network name> <container id>
# docker start <container id>