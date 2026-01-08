# 🐳 Docker Інструкції для NEXX GSM

## Швидкий Запуск

### Варіант 1: Через Batch файли (Windows)

1. **Запустити:**
   - Подвійний клік на `start-docker.bat`
   - Або запустити в терміналі: `start-docker.bat`

2. **Відкрити сайт:**
   - Браузер: `http://localhost:8080`

3. **Зупинити:**
   - Подвійний клік на `stop-docker.bat`
   - Або: `docker-compose down`

### Варіант 2: Через Docker Compose (Вручну)

```bash
# Перейти в папку проекту
cd "c:\Users\dmitr\OneDrive\Робочий стіл\NEXX GSM"

# Збілдити та запустити
docker-compose up -d --build

# Переглянути логи
docker-compose logs -f

# Зупинити
docker-compose down
```

### Варіант 3: Через Docker (Без Compose)

```bash
# Збілдити образ
docker build -t sc-bucharest .

# Запустити контейнер
docker run -d -p 8080:80 --name sc-bucharest-website sc-bucharest

# Зупинити
docker stop sc-bucharest-website
docker rm sc-bucharest-website
```

## Перевірка Статусу

```bash
# Перевірити чи працює контейнер
docker ps

# Переглянути логи
docker logs sc-bucharest-website

# Відкрити shell в контейнері
docker exec -it sc-bucharest-website sh
```

## Проблеми та Рішення

### Помилка: "Docker не запущений"
- Запустіть Docker Desktop
- Перевірте чи Docker працює: `docker ps`

### Помилка: "Port 8080 already in use"
- Змініть порт в `docker-compose.yml`:
  ```yaml
  ports:
    - "8081:80"  # Замість 8080
  ```

### Помилка: "Cannot connect to Docker daemon"
- Перезапустіть Docker Desktop
- Перевірте чи Docker Desktop запущений

### Оновити сайт після змін
```bash
# Перебілдити образ
docker-compose up -d --build

# Або перезапустити
docker-compose restart
```

## Структура Docker

- **Dockerfile** - конфігурація образу (nginx:alpine)
- **docker-compose.yml** - конфігурація для запуску
- **nginx.conf** - налаштування веб-сервера
- **.dockerignore** - файли які не копіюються в образ

## Порт

За замовчуванням сайт доступний на: **http://localhost:8080**

Щоб змінити порт, відредагуйте `docker-compose.yml`:
```yaml
ports:
  - "ВАШ_ПОРТ:80"
```

## Переваги Docker

✅ Ізольоване середовище  
✅ Легко деплоїти на сервер  
✅ Однакова робота на всіх системах  
✅ Швидкий запуск  
✅ Nginx з оптимізацією (gzip, кешування)

