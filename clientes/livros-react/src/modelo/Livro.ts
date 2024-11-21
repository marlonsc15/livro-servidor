class Livro {
    codigo: string;
    codEditora: number;
    título: string;
    resumo: string;
    autores: string[]

    constructor(codigo: string, codEditora: number, título: string, resumo: string, autores: string[] ) {
        this.codigo = codigo;
        this.codEditora = codEditora;
        this.título = título;
        this.resumo = resumo;
        this.autores = autores;
    }
}
export default Livro;