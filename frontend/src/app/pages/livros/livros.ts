import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';

@Component({


  selector: 'app-livros',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './livros.html',
  styleUrl: './livros.scss'
})
export class Livros implements OnInit {

  form: FormGroup;

  livros: any[] = [];

categorias: any[] = [];

  constructor(
    private fb: FormBuilder
  ) {

    this.form = this.fb.group({

      titulo: [''],

      autor: [''],

      isbn: [''],

      ano: [''],

      categoriaId: [0]

    });

  }

  // Simula carregamento de dados do backend

ngOnInit(): void {

  this.carregarLivros();

  this.carregarCategorias();

}

  carregarLivros(): void {

    const dados = localStorage.getItem('livros');

    if (dados) {

      this.livros = JSON.parse(dados);

    } else {

      this.livros = [];

    }

    // força atualização da tela
    this.livros = [...this.livros];

  }

  salvar(): void {

    if (this.form.invalid) {
      return;
    }

    const valores = this.form.value;

    const categoriaSelecionada = this.categorias.find(

      categoria => categoria.id == valores.categoriaId

    );

    const novoLivro = {

      id: Date.now(),

      titulo: valores.titulo,

      autor: valores.autor,

      isbn: valores.isbn,

      ano: valores.ano,

      status: 'Disponível',

      categoria: categoriaSelecionada

    };

    this.livros = [

      ...this.livros,

      novoLivro

    ];

    localStorage.setItem(

      'livros',

      JSON.stringify(this.livros)

    );

    this.form.reset({

      titulo: '',

      autor: '',

      isbn: '',

      ano: '',

      categoriaId: 0

    });

  }

  deletar(id: number): void {

    this.livros = this.livros.filter(

      livro => livro.id !== id

    );

    localStorage.setItem(

      'livros',

      JSON.stringify(this.livros)

    );

  }

  carregarCategorias(): void {

  const dados = localStorage.getItem(
    'categorias'
  );

  if (dados) {

    this.categorias = JSON.parse(dados);

  } else {

    this.categorias = [];

  }

  this.categorias = [...this.categorias];

 }

}