FROM node:16-alpine

WORKDIR /app

COPY . .

# RUN npm i --registry=http://mirrors.cloud.tencent.com/npm/

RUN npm i --registry=http://mirrors.cloud.tencent.com/npm/

RUN npm run build 

FROM nginx:alpine

COPY ./dist/ /usr/share/nginx/html


# FROM nginx

# CMD ['mkdir','dist']

# COPY dist /app/223/

# CMD ["cp",'-r','dist/','/usr/share/nginx/html']