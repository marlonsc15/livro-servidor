const Livro = require('./livro-schema');

const obterLivros = async () => {
  try {
    return await Livro.find();
  } catch (error) {
    throw new Error('Erro ao obter os livros: ' + error.message);
  }
};

const incluir = async (livro) => {
  try {
    return await Livro.create(livro);
  } catch (error) {
    throw new Error('Erro ao incluir o livro: ' + error.message);
  }
};

const excluir = async (codigo) => {
  try {
    return await Livro.deleteOne({ _id: codigo }); 
  } catch (error) {
    throw new Error('Erro ao excluir o livro: ' + error.message);
  }
};

module.exports = {
  obterLivros,
  incluir,
  excluir
};
