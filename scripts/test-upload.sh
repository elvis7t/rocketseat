#!/bin/bash

echo "🚀 Iniciando upload do arquivo CSV..."

response=$(curl -s -X POST -F "file=@src/files/tasks.csv" http://localhost:3333/tasks/import-csv)

if echo "$response" | grep -q "success\":true"; then
    echo "✅ Upload realizado com sucesso!"
    echo "📝 Resposta do servidor:"
    echo "$response" | json_pp
else
    echo "❌ Erro no upload:"
    echo "$response" | json_pp
fi
