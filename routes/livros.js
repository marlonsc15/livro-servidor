const express = require('express');
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const livros = await obterLivros();
    res.status(200).json(livros);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao obter os livros.', erro: error.message });
  }
});

router.post('/', async (req, res) => {
  const livro = req.body;
  try {
    await incluir(livro);
    res.status(201).json({ mensagem: 'Livro incluído com sucesso!' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao incluir o livro.', erro: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await excluir(id);
    res.status(200).json({ mensagem: 'Livro excluído com sucesso!' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao excluir o livro.', erro: error.message });
  }
});

module.exports = router;
