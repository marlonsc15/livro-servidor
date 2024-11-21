import React, { useState, useEffect } from 'react';
import ControleLivros from './controle/ControleLivros';
import ControleEditora from './controle/ControleEditora';

const LinhaLivro = ({ livro, excluir }) => {
    const controleEditora = new ControleEditora();
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

    return (
        <tr>
            <td>
                <ul className='list-group'>
                    <li style={{ listStyle: 'none' }}>{livro.título}</li>
                    <li style={{ listStyle: 'none' }}><button className='btn btn-danger' onClick={() => excluir(livro.codigo)}>Excluir</button></li>
                </ul>
            </td>
            <td>{livro.resumo}</td>
            <td>{nomeEditora}</td>

            <td>
                <ul>
                    {livro.autores.map((autor, index) => (
                        <li key={index}>{autor}</li>
                    ))}
                </ul>
            </td>
        </tr>
    );
};

const LivroLista = () => {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        const controleLivros = new ControleLivros();
        controleLivros.obterLivros()
            .then(livrosObtidos => {
                setLivros(livrosObtidos);
                setCarregado(true);
            })
            .catch(error => {
                console.error("Erro ao carregar livros:", error);
                setCarregado(true);
            });
    }, []);

    const excluir = (codigo) => {
        const controleLivros = new ControleLivros();
        controleLivros.excluir(codigo)
            .then(() => {
                setLivros(livros.filter(livro => livro.codigo !== codigo));
                setCarregado(false);
            })
            .catch(error => {
                console.error("Erro ao excluir o livro:", error);
                setCarregado(true);
            });
    };

    return (
        <main className='mx-5'>
            <h1 className='mx-5 d-flex justify-content-start'>Catalogo de Livros</h1>
            <table className='table table-striped'>
                <thead className='table-dark'>
                    <tr>
                        <th >Título</th>
                        <th>Resumo</th>
                        <th>Editora</th>
                        <th>Autores</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map((livro, index) => (
                        <LinhaLivro
                            key={index}
                            livro={livro}
                            excluir={excluir}
                            index={index} 
                        />
                    ))}
                </tbody>
            </table>
        </main>
    );
};

export default LivroLista;
