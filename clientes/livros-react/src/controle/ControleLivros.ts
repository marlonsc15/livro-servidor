import Livro from "../modelo/Livro";

const baseURL = "http://localhost:3030/livros"

interface LivroMongo {
    _id: string | null;
    codEditora: number;
    título: string;
    resumo: string;
    autores: string[];
}

class ControleLivro {

    async obterLivros(): Promise<Livro[]> {
        try {
            const response = await fetch(baseURL);
            if (!response.ok) {
                throw new Error('Erro ao buscar livros');
            }
            const livrosApi: LivroMongo[] = await response.json();

            const livros: Livro[] = livrosApi.map(livro => ({
                codEditora: livro.codEditora,
                título: livro.título,
                codigo: livro._id,
                resumo: livro.resumo,
                autores: livro.autores
            }));

            return livros;
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    async incluir(livro: Livro): Promise<boolean> {
        try {
            const livroMongo: LivroMongo = {
                _id: '',
                codEditora: livro.codEditora,
                título: livro.título,
                resumo: livro.resumo,
                autores: livro.autores
            };

            const response = await fetch(baseURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(livroMongo)
            });

            const result = await response.json();
            return result.ok;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async excluir(codigo: string): Promise<boolean> {
        try {
            const response = await fetch(`${baseURL}/${codigo}`, {
                method: 'DELETE'
            });
            const result = await response.json();
            return result.ok;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}

export default ControleLivro;

