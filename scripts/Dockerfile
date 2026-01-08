# Dockerfile для SC Bucharest
FROM nginx:alpine

# Копіюємо файли сайту
COPY . /usr/share/nginx/html

# Копіюємо конфігурацію nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Відкриваємо порт 80
EXPOSE 80

# Запускаємо nginx
CMD ["nginx", "-g", "daemon off;"]
