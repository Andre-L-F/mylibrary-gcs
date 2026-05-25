import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {

  totalLivros = 0;

  totalCategorias = 0;

  totalEmprestimos = 0;

  totalAtrasados = 0;

  livrosDisponiveis = 0;

  livrosEmprestados = 0;

  ngOnInit(): void {

    this.criarDadosIniciais();

    this.carregarDados();
  }

  carregarDados(): void {

    const livrosStorage =
      localStorage.getItem('livros');

    const categoriasStorage =
      localStorage.getItem('categorias');

    const emprestimosStorage =
      localStorage.getItem('emprestimos');

    const livros = livrosStorage
      ? JSON.parse(livrosStorage)
      : [];

    const categorias = categoriasStorage
      ? JSON.parse(categoriasStorage)
      : [];

    const emprestimos = emprestimosStorage
      ? JSON.parse(emprestimosStorage)
      : [];

    this.totalLivros = livros.length;

    this.totalCategorias = categorias.length;

    this.totalEmprestimos = emprestimos.length;

    this.livrosDisponiveis = livros.filter(

      (livro: any) =>
        livro.status === 'Disponível'

    ).length;

    this.livrosEmprestados = livros.filter(

      (livro: any) =>
        livro.status === 'Emprestado'

    ).length;

    const hoje = new Date();

    this.totalAtrasados = emprestimos.filter(

      (emprestimo: any) => {

        if (
          emprestimo.status === 'Devolvido'
        ) {
          return false;
        }

        const dataDevolucao = new Date(
          emprestimo.dataDevolucao
        );

        return dataDevolucao < hoje;

      }

    ).length;

  }
criarDadosIniciais(): void {

  const categoriasStorage =
    localStorage.getItem('categorias');

  if (!categoriasStorage) {

    const categorias = [

      {
        id: 1,
        nome: 'Fantasia',
        descricao: 'Livros de fantasia'
      },

      {
        id: 2,
        nome: 'Tecnologia',
        descricao: 'Livros técnicos'
      },

      {
        id: 3,
        nome: 'Romance',
        descricao: 'Livros românticos'
      },

      {
        id: 4,
        nome: 'Terror',
        descricao: 'Livros de terror'
      },

      {
        id: 5,
        nome: 'Ficção Científica',
        descricao: 'Livros futuristas'
      }

    ];

    localStorage.setItem(
      'categorias',
      JSON.stringify(categorias)
    );

  }

  const livrosStorage =
    localStorage.getItem('livros');

  if (!livrosStorage) {

    const livros = [

      {
        id: 1,
        titulo: 'O Hobbit',
        autor: 'J.R.R Tolkien',
        isbn: '1111',
        ano: 1937,
        status: 'Disponível',
        categoria: {
          id: 1,
          nome: 'Fantasia'
        }
      },

      {
        id: 2,
        titulo: 'Clean Code',
        autor: 'Robert Martin',
        isbn: '2222',
        ano: 2008,
        status: 'Emprestado',
        categoria: {
          id: 2,
          nome: 'Tecnologia'
        }
      },

      {
        id: 3,
        titulo: 'Drácula',
        autor: 'Bram Stoker',
        isbn: '3333',
        ano: 1897,
        status: 'Disponível',
        categoria: {
          id: 4,
          nome: 'Terror'
        }
      },

      {
        id: 4,
        titulo: 'Duna',
        autor: 'Frank Herbert',
        isbn: '4444',
        ano: 1965,
        status: 'Emprestado',
        categoria: {
          id: 5,
          nome: 'Ficção Científica'
        }
      },

      {
        id: 5,
        titulo: 'Orgulho e Preconceito',
        autor: 'Jane Austen',
        isbn: '5555',
        ano: 1813,
        status: 'Disponível',
        categoria: {
          id: 3,
          nome: 'Romance'
        }
      }

    ];

    localStorage.setItem(
      'livros',
      JSON.stringify(livros)
    );

  }

  const emprestimosStorage =
    localStorage.getItem('emprestimos');

  if (!emprestimosStorage) {

    const emprestimos = [

      {
        id: 1,

        livro: {
          id: 2,
          titulo: 'Clean Code'
        },

        usuario: 'Carlos',

        dataEmprestimo: '2026-05-10',

        dataDevolucao: '2026-05-30',

        status: 'Ativo'
      },

      {
        id: 2,

        livro: {
          id: 4,
          titulo: 'Duna'
        },

        usuario: 'Marina',

        dataEmprestimo: '2026-04-01',

        dataDevolucao: '2026-04-15',

        status: 'Ativo'
      },

      {
        id: 3,

        livro: {
          id: 1,
          titulo: 'O Hobbit'
        },

        usuario: 'João',

        dataEmprestimo: '2026-03-01',

        dataDevolucao: '2026-03-20',

        status: 'Devolvido'
      }

    ];

    localStorage.setItem(
      'emprestimos',
      JSON.stringify(emprestimos)
    );

  }

}

}