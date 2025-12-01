#!/bin/bash
# Script de inicio rápido para Agentforce Landing Page

echo "🚀 Iniciando Agentforce Landing Page..."
echo ""

# Verificar si Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado."
    echo "Por favor, descarga Node.js desde: https://nodejs.org/"
    exit 1
fi

echo "✓ Node.js detectado: $(node -v)"
echo ""

# Verificar si npm está instalado
if ! command -v npm &> /dev/null; then
    echo "❌ npm no está instalado."
    exit 1
fi

echo "✓ npm detectado: $(npm -v)"
echo ""

# Instalar dependencias si node_modules no existe
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependencias..."
    npm install
    echo "✓ Dependencias instaladas"
    echo ""
fi

# Iniciar el servidor
echo "🎯 Iniciando servidor de desarrollo..."
echo "📱 La aplicación se abrirá en http://localhost:3000"
echo ""

npm start
