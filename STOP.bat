@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo ====================================
echo SC Bucharest - Stop All
echo ====================================
echo.

docker-compose down

echo.
echo Stopped!
echo.
pause
