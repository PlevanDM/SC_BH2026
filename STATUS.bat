@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo ====================================
echo SC Bucharest - Status
echo ====================================
echo.

echo Running containers:
docker ps

echo.
echo All containers:
docker ps -a

echo.
echo Logs (last 20 lines):
docker-compose logs --tail=20

echo.
pause
