FROM node:16-alpine as builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm i --registry https://registry.npm.taobao.org 

COPY . .

RUN npm run build 

# COPY ./nginx.conf .

# COPY ./default.conf.template .

FROM nginx:alpine as nginx

COPY --from=builder app/dist/ /usr/share/nginx/html/

# RUN rm /etc/nginx/conf.d/default.conf

COPY --from=builder app/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder app/default.conf.template /etc/nginx/conf.d

CMD /bin/sh -c "envsubst '80' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'
