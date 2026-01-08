# PowerShell скрипт для запуску Docker
# Використовуйте: powershell -ExecutionPolicy Bypass -File start.ps1

Write-Host "====================================" -ForegroundColor Cyan
Write-Host "SC Bucharest - Docker Launch" -ForegroundColor Cyan
Write-Host "====================================" -ForegroundColor Cyan
Write-Host ""

# Отримати шлях до папки скрипта
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $ScriptDir

Write-Host "Перевірка Docker..." -ForegroundColor Yellow

try {
    $dockerVersion = docker --version
    Write-Host "Docker знайдено: $dockerVersion" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Docker не встановлений або не запущений!" -ForegroundColor Red
    Write-Host "Завантажте Docker Desktop з docker.com" -ForegroundColor Yellow
    Read-Host "Натисніть Enter для виходу"
    exit 1
}

Write-Host ""
Write-Host "Збірка та запуск контейнера..." -ForegroundColor Yellow

try {
    docker-compose up -d --build
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "====================================" -ForegroundColor Green
        Write-Host "Сайт запущено успішно!" -ForegroundColor Green
        Write-Host "====================================" -ForegroundColor Green
        Write-Host ""
        Write-Host "Відкрийте в браузері: http://localhost:8080" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "Для зупинки: docker-compose down" -ForegroundColor Yellow
        Write-Host ""
        
        # Спробувати відкрити браузер
        Start-Process "http://localhost:8080"
        
    } else {
        throw "Docker-compose завершився з помилкою"
    }
} catch {
    Write-Host ""
    Write-Host "ERROR: Помилка при запуску контейнера!" -ForegroundColor Red
    Write-Host "Деталі: $_" -ForegroundColor Red
    Write-Host ""
    Write-Host "Спробуйте запустити вручну:" -ForegroundColor Yellow
    Write-Host "  docker-compose up -d --build" -ForegroundColor Cyan
}

Read-Host "Натисніть Enter для виходу"
