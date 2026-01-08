@echo off
chcp 65001 >nul
echo ====================================
echo SC Bucharest - Quick Start
echo ====================================
echo.

echo Starting with PowerShell...
powershell -ExecutionPolicy Bypass -File "%~dp0start.ps1"

if errorlevel 1 (
    echo.
    echo If PowerShell failed, try manual start:
    echo   1. Open PowerShell/CMD in this folder
    echo   2. Run: docker-compose up -d --build
    echo   3. Open: http://localhost:8080
    pause
)
