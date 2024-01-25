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

RUN ls -l /app

# 第二阶段：设置 Nginx
FROM nginx:alpine


COPY --from=builder /app/src/dist/ /usr/share/nginx/html


COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf.template /etc/nginx/conf.d/


CMD ["nginx", "-g", "daemon off;"]

