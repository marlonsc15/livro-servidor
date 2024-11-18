// Importa a conexão do arquivo conexao.js
const banco = require('./conexao');

// Define a estrutura do esquema LivroSchema
const LivroSchema = new banco.Schema({
  _id: { type: banco.Schema.Types.ObjectId, auto: true },
  titulo: { type: String, required: true },
  codEditora: { type: Number, required: true },
  resumo: { type: String, required: false },
  autores: { type: [String], required: false }
});

// Associa o esquema LivroSchema à coleção 'livros' e cria o modelo Livro
const Livro = banco.model('Livro', LivroSchema, 'livros');

// Exporta o modelo Livro no padrão de módulo do JavaScript
module.exports = Livro;
