@echo off
setlocal enabledelayedexpansion

:: Get short path without Cyrillic
for %%I in ("%~dp0.") do set "SHORT_PATH=%%~sI"

cd /d "%SHORT_PATH%"

echo ====================================
echo SC Bucharest - Docker Launcher
echo ====================================
echo.
echo Working directory: %SHORT_PATH%
echo.

:: Check Docker
echo Checking Docker...
docker version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Docker is not running!
    echo.
    echo Please start Docker Desktop and try again.
    pause
    exit /b 1
)

echo Docker OK
echo.

:: Stop old containers
echo Stopping old containers...
docker-compose down >nul 2>&1

:: Start new ones
echo Building and starting...
docker-compose up -d --build

if errorlevel 1 (
    echo.
    echo ERROR: Failed to start!
    echo Try: docker-compose up -d --build
    pause
    exit /b 1
)

echo.
echo ====================================
echo SUCCESS! Site is running!
echo ====================================
echo.
echo Open in browser: http://localhost:8080
echo.
echo Commands:
echo   Stop:   docker-compose down
echo   Logs:   docker-compose logs -f
echo   Status: docker ps
echo.

:: Open browser
timeout /t 2 /nobreak >nul
start http://localhost:8080

pause
