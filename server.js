const express = require("express");
const path = require("path");

const server = express();

server.get('/', (_req, res) => {
  res.sendFile(path.resolve('index.html'));
});

server.listen(3000, () => { console.log('Servidor rodando'); });
