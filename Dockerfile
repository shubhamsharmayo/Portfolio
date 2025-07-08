FROM node
WORKDIR /portfolio
COPY . .
RUN npm install
CMD [ "npm","run","dev" ]
