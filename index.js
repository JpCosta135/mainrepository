const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// rota inicial
app.get("/", (req, res) => {
  res.send("<h1>Bem-vindo ao meu site!</h1>");
});

// rota de produtos
app.get("/produtos", (req, res) => {
  res.send("<h1>Lista de Produtos!</h1>");
});

// rota com parâmetro obrigatório
app.get("/consulta/:parametro", (req, res) => {
  res.send("Retorno da consulta: " + req.params.parametro);
});

// rota cadastro — sem parâmetro
app.get("/cadastro", (req, res) => {
  res.send("<h1>Produto criado!</h1>");
});

// rota cadastro — com parâmetro nome
app.get("/cadastro/:nome", (req, res) => {
  const nome = req.params.nome;
  res.send(`<h1>Produto ${nome} criado!</h1>`);
});

// rota POST para cadastro de produto
app.post("/produtos", (req, res) => {
  const { nome, preco } = req.body;

  if (!nome || !preco) {
    return res.status(400).send("Erro: informe nome e preço do produto!");
  }

  res.send(`Produto "${nome}" cadastrado com sucesso por R$ ${preco}!`);
});

console.log("PORT env:", process.env.PORT);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
