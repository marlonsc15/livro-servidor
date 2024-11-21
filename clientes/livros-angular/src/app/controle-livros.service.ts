import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    {
      codEditora: 1,
      titulo: 'Use a cabeça: Java',
      codigo: 0,
      resumo: "Use a Cabeça! Java é uma experiência completa de apresendizado em programação orientada a objetos (OO) e Java.",
      autores: ["Bert Bates", "Kathy Sierra"]
    },
    {
      codEditora: 2,
      titulo: 'Java, como programar',
      codigo: 1,
      resumo: "Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel",
      autores: ["Paul Deitel", "Harvey Deitel"]
    },
    {
      codEditora: 3,
      titulo: 'Core Java for the impatient',
      codigo: 2,
      resumo: "eaders familiar whith Horstmann's original, two-volume 'Core java' books who are looking for a comprehensive, but condensed guide to all of the new features and functions of java SE 9 will learn how these new features impact the language and core libraries.",
      autores: ["Cay Horstmann"]
    }
  ];

  constructor() { }

  // Método para retornar o vetor de livros
  obterLivros(): Array<Livro> {
    return this.livros;
  }

  // Método para incluir um novo livro
  incluir(livro: Livro): void {
    // Encontrar o código mais alto no vetor de livros e incrementá-lo para o novo livro
    const novoCodigo = this.livros.length > 0 ? Math.max(...this.livros.map(l => l.codigo)) + 1 : 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  // Método para excluir um livro com base no código
  excluir(codigo: number): void {
    const indice = this.livros.findIndex((l) => l.codigo === codigo);
    if (indice !== -1) {
      this.livros.splice(indice, 1);
    }
  }
}
