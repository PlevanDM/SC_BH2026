@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo ====================================
echo SC Bucharest - Full Restart
echo ====================================
echo.

:: Check Docker
docker version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Docker is not running!
    echo Please start Docker Desktop first.
    pause
    exit /b 1
)

echo [1/4] Stopping containers...
docker-compose down

echo [2/4] Cleaning up...
docker system prune -f

echo [3/4] Building fresh image...
docker-compose build --no-cache

echo [4/4] Starting container...
docker-compose up -d

echo.
echo Checking status...
docker ps

echo.
echo ====================================
echo DONE! Opening browser...
echo ====================================
echo.

timeout /t 2 /nobreak >nul
start http://localhost:8080

echo.
echo Site: http://localhost:8080
echo.
pause
