const express = require('express');
const path = require('path');
const app = express();
const router = require('./router/router');

app.use(express.json());

// Servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Rotas da API
app.use('/', router); // Pode usar '/api' se quiser

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});