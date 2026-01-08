@echo off
echo ========================================
echo   Push to GitHub - SC Bucharest
echo ========================================
echo.

REM Перевірка, чи вказано URL репозиторію
if "%1"=="" (
    echo ПОМИЛКА: Потрібно вказати URL репозиторію!
    echo.
    echo Використання:
    echo   push-to-github.bat https://github.com/YOUR_USERNAME/sc-bucharest.git
    echo.
    echo Або якщо репозиторій вже налаштовано:
    echo   git remote add origin https://github.com/YOUR_USERNAME/sc-bucharest.git
    echo   git branch -M main
    echo   git push -u origin main
    echo.
    pause
    exit /b 1
)

REM Додавання remote репозиторію
echo Додавання remote репозиторію...
git remote remove origin 2>nul
git remote add origin %1

REM Перейменування гілки на main (за потреби)
echo Перейменування гілки на main...
git branch -M main

REM Вивантаження коду
echo.
echo Вивантаження коду на GitHub...
echo (Потрібна автентифікація через GitHub)
echo.
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo   Код успішно вивантажено на GitHub!
    echo ========================================
) else (
    echo.
    echo ========================================
    echo   ПОМИЛКА при вивантаженні!
    echo ========================================
    echo.
    echo Можливі причини:
    echo 1. Невірний URL репозиторію
    echo 2. Потрібна автентифікація GitHub
    echo 3. Репозиторій не існує або немає доступу
    echo.
)

pause



