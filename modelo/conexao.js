const mongoose = require('mongoose');

const banco = mongoose;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

banco.connect('mongodb://localhost:27017/livraria', options)
  .then(() => console.log('Conexão com o MongoDB bem-sucedida!'))
  .catch(err => console.error('Erro ao conectar com o MongoDB:', err));

module.exports = banco;
