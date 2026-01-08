@echo off
echo ====================================
echo SC Bucharest - Public Tunnel Launch
echo ====================================
echo.
echo Запускаю публічний туннель для доступу ззовні...
echo.
echo Після запуску ти отримаєш URL типу: https://xxxxx.loca.lt
echo Цей URL можна відкрити з будь-якого пристрою/браузера!
echo.
echo Натисни Ctrl+C щоб зупинити туннель
echo.
echo ====================================
echo.

cd /d "%~dp0"
npx -y localtunnel --port 8080

pause




