@echo off
echo ====================================
echo SC Bucharest - Docker Stop
echo ====================================
echo.

cd /d "%~dp0"

echo Зупинка контейнера...
docker-compose down

echo.
echo Контейнер зупинено!
pause
