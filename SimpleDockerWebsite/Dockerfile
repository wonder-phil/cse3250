FROM node:24.8.0

LABEL pgb_node=PGB-website
# Create app directory
WORKDIR /usr/src/app

RUN git clone -q https://github.com/wonder-phil/SimpleDockerWebsite

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .


EXPOSE 3000
CMD [ "node", "index.js" ]

