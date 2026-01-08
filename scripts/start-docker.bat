@echo off
echo ====================================
echo SC Bucharest - Docker Launch
echo ====================================
echo.

cd /d "%~dp0"

echo Checking Docker...
docker --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Docker не встановлений або не запущений!
    echo Будь ласка, встановіть Docker Desktop та запустіть його.
    pause
    exit /b 1
)

echo Docker знайдено!
echo.

echo Збірка та запуск контейнера...
docker-compose up -d --build

if errorlevel 1 (
    echo.
    echo ERROR: Помилка при запуску контейнера!
    echo Спробуйте запустити вручну:
    echo   docker-compose up -d --build
    pause
    exit /b 1
)

echo.
echo ====================================
echo Сайт запущено успішно!
echo ====================================
echo.
echo Відкрийте в браузері: http://localhost:8080
echo.
echo Для зупинки виконайте: docker-compose down
echo.
pause
