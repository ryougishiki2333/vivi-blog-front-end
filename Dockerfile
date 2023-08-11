FROM node:16-alpine as builder

WORKDIR /app

COPY package.json .

RUN npm i --registry=http://mirrors.cloud.tencent.com/npm/

COPY . .

RUN npm run build 

FROM nginx:alpine

# COPY ./dist/ /usr/share/nginx/html
COPY ./dist/ /usr/share/nginx/html/

RUN rm /etc/nginx/conf.d/default.conf

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY ./default.conf.template /etc/nginx/conf.d


CMD /bin/sh -c "envsubst '80' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'
# FROM nginx

# CMD ['mkdir','dist']

# COPY dist /app/223/

# CMD ["cp",'-r','dist/','/usr/share/nginx/html']