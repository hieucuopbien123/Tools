FROM node:14-alpine AS BUILD_IMAGE

WORKDIR /nest

# Dùng /nest or . chứ k có ./nest
COPY . /nest
RUN npm install

EXPOSE 3000
CMD ["npm", "run", "start:dev"]
