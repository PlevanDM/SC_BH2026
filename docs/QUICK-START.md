# NEXX GSM Quick Start Guide

## 🚀 Швидкий запуск (Windows)

### Варіант 1: PowerShell (Рекомендовано)
1. Клік правою кнопкою на `start.ps1`
2. "Run with PowerShell"
3. Або відкрийте PowerShell і виконайте:
```powershell
powershell -ExecutionPolicy Bypass -File ".\start.ps1"
```

### Варіант 2: Batch файл
1. Подвійний клік на `quick-start.bat`

### Варіант 3: Вручну
Відкрийте PowerShell/CMD в цій папці і виконайте:
```bash
docker-compose up -d --build
```

## 🌐 Доступ до сайту

Після запуску відкрийте в браузері:
**http://localhost:8080**

## 📊 Перевірка статусу

```bash
# Список запущених контейнерів
docker ps

# Логи контейнера
docker-compose logs -f

# Зупинити контейнер
docker-compose down

# Перезапустити
docker-compose restart
```

## ❌ Проблеми

### "Port 8080 is already in use"
Змініть порт у `docker-compose.yml`:
```yaml
ports:
  - "8081:80"  # Замість 8080
```

### "Cannot connect to Docker daemon"
1. Запустіть Docker Desktop
2. Перевірте: `docker ps`

### "Docker not found"
Завантажте Docker Desktop з https://docker.com

## 📁 Файли для запуску

- `start.ps1` - PowerShell скрипт (найкращий)
- `quick-start.bat` - Batch файл
- `start-docker.bat` - Старий batch файл
- `start-docker.sh` - Для Linux/Mac/WSL

## 🔧 Ручний запуск

Якщо скрипти не працюють:
1. Відкрийте PowerShell
2. Перейдіть до папки проекту
3. Виконайте: `docker-compose up -d --build`
4. Відкрийте: http://localhost:8080

## 📞 Допомога

Якщо виникають проблеми:
1. Перевірте, чи запущений Docker Desktop
2. Перевірте логи: `docker-compose logs`
3. Перезапустіть Docker Desktop

