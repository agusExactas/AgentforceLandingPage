@echo off
REM Script de inicio rápido para Agentforce Landing Page (Windows)

echo.
echo ====================================
echo   Agentforce Landing Page Starter
echo ====================================
echo.

REM Verificar si Node.js está instalado
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [X] Node.js no está instalado.
    echo Por favor, descarga Node.js desde: https://nodejs.org/
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
echo [OK] Node.js detectado: %NODE_VERSION%

REM Verificar si npm está instalado
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [X] npm no está instalado.
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('npm -v') do set NPM_VERSION=%%i
echo [OK] npm detectado: %NPM_VERSION%
echo.

REM Instalar dependencias si node_modules no existe
if not exist "node_modules" (
    echo [*] Instalando dependencias...
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo [X] Error en la instalación de dependencias.
        pause
        exit /b 1
    )
    echo [OK] Dependencias instaladas
    echo.
)

REM Iniciar el servidor
echo [*] Iniciando servidor de desarrollo...
echo [*] La aplicación se abrirá en http://localhost:3000
echo.

call npm start
pause
