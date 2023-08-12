# FROM node:16-alpine as builder

# COPY . .

# RUN npm i

# RUN npm run build 

# COPY ./nginx.conf .

# COPY ./default.conf.template .

FROM nginx:alpine as nginx

WORKDIR /app

COPY ./dist/ /usr/share/nginx/html/

# RUN rm /etc/nginx/conf.d/default.conf

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY ./default.conf.template /etc/nginx/conf.d

CMD /bin/sh -c "envsubst '80' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'
