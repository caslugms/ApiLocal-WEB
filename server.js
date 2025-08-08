const express = require('express');
const app = express();
const router = require('./router/router');

app.use(express.json());

app.use('/', router);
app.use('/api', router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});