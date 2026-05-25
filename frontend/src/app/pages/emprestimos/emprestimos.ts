import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-emprestimos',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './emprestimos.html',
  styleUrl: './emprestimos.scss'
})
export class Emprestimos implements OnInit {

  form: FormGroup;

  emprestimos: any[] = [];

  livros: any[] = [];

  constructor(
    private fb: FormBuilder
  ) {

    this.form = this.fb.group({

      livroId: [0],

      usuario: [''],

      dataEmprestimo: [''],

      dataDevolucao: ['']

    });

  }

  // Simula carregamento de dados do backend
  
  ngOnInit(): void {

    this.carregarLivros();

    this.carregarEmprestimos();

  }

  carregarLivros(): void {

    const dados = localStorage.getItem('livros');

    if (dados) {

      this.livros = JSON.parse(dados);

    } else {

      this.livros = [];

    }

    this.livros = [...this.livros];

  }

  carregarEmprestimos(): void {

    const dados = localStorage.getItem('emprestimos');

    if (dados) {

      this.emprestimos = JSON.parse(dados);

    } else {

      this.emprestimos = [];

    }

    this.emprestimos = [...this.emprestimos];

  }

  salvar(): void {

    if (this.form.invalid) {
      return;
    }

    const valores = this.form.value;

    const livroSelecionado = this.livros.find(

      livro => livro.id == valores.livroId

    );

    if (!livroSelecionado) {
      return;
    }

    livroSelecionado.status = 'Emprestado';

    localStorage.setItem(

      'livros',

      JSON.stringify(this.livros)

    );

    const novoEmprestimo = {

      id: Date.now(),

      livro: livroSelecionado,

      usuario: valores.usuario,

      dataEmprestimo: valores.dataEmprestimo,

      dataDevolucao: valores.dataDevolucao,

      status: 'Ativo'

    };

    this.emprestimos = [

      ...this.emprestimos,

      novoEmprestimo

    ];

    localStorage.setItem(

      'emprestimos',

      JSON.stringify(this.emprestimos)

    );

    this.form.reset({

      livroId: 0,

      usuario: '',

      dataEmprestimo: '',

      dataDevolucao: ''

    });

  }

  devolver(id: number): void {

    const emprestimo = this.emprestimos.find(

      item => item.id === id

    );

    if (!emprestimo) {
      return;
    }

    emprestimo.status = 'Devolvido';

    const livro = this.livros.find(

      item => item.id === emprestimo.livro.id

    );

    if (livro) {

      livro.status = 'Disponível';

      localStorage.setItem(

        'livros',

        JSON.stringify(this.livros)

      );

    }

    this.emprestimos = [...this.emprestimos];

    localStorage.setItem(

      'emprestimos',

      JSON.stringify(this.emprestimos)

    );

  }

  deletar(id: number): void {

    this.emprestimos = this.emprestimos.filter(

      emprestimo => emprestimo.id !== id

    );

    localStorage.setItem(

      'emprestimos',

      JSON.stringify(this.emprestimos)

    );

  }

}