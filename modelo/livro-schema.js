const banco = require('./conexao');

const LivroSchema = new banco.Schema({
  _id: { type: banco.Schema.Types.ObjectId, auto: true },
  titulo: { type: String, required: true },
  codEditora: { type: Number, required: true },
  resumo: { type: String, required: false },
  autores: { type: [String], required: false }
});

const Livro = banco.model('Livro', LivroSchema, 'livros');

module.exports = Livro;
