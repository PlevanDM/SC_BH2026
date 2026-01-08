#!/bin/bash
# Скрипт запуску Docker для Linux/Mac/WSL

echo "=================================="
echo "SC Bucharest - Docker Launch"
echo "=================================="
echo ""

# Перейти в папку скрипта
cd "$(dirname "$0")"

echo "Checking Docker..."
if ! command -v docker &> /dev/null; then
    echo "ERROR: Docker не встановлений!"
    exit 1
fi

echo "Docker знайдено!"
echo ""

echo "Збірка та запуск контейнера..."
docker-compose up -d --build

if [ $? -eq 0 ]; then
    echo ""
    echo "=================================="
    echo "Сайт запущено успішно!"
    echo "=================================="
    echo ""
    echo "Відкрийте в браузері: http://localhost:8080"
    echo ""
    echo "Для зупинки: docker-compose down"
    echo ""
else
    echo ""
    echo "ERROR: Помилка при запуску!"
    echo "Спробуйте: docker-compose up -d --build"
    exit 1
fi
