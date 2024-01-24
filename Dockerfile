# 第一阶段：使用 Node.js 镜像进行构建
FROM node:16-alpine as builder

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json (如果有)
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 复制项目源代码
COPY . .

# 构建应用程序
RUN npm run build

# 第二阶段：设置 Nginx
FROM nginx:alpine

# 设置工作目录
WORKDIR /usr/share/nginx/html

# 从构建阶段复制构建好的文件到 Nginx 镜像
COPY --from=builder /app/dist/ .

# 可选：如果需要移除默认的 Nginx 配置，取消以下注释
# RUN rm /etc/nginx/conf.d/default.conf

# 复制 Nginx 配置文件
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./default.conf.template /etc/nginx/conf.d/

# 启动命令
CMD /bin/sh -c "envsubst '80' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'

