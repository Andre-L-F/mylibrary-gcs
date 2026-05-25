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

  const valores = this.form.value;

  const livroId = Number(valores.livroId);

  if (
    livroId === 0 ||
    !valores.usuario ||
    !valores.dataEmprestimo ||
    !valores.dataDevolucao
  ) {

    alert('Preencha todos os campos.');

    return;

  }

  const livroSelecionado = this.livros.find(

    livro => Number(livro.id) === livroId

  );

  if (!livroSelecionado) {

    alert('Livro não encontrado.');

    return;

  }

  if (livroSelecionado.status === 'Emprestado') {

    alert('Livro já está emprestado.');

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

  this.emprestimos = [...this.emprestimos];

  alert('Empréstimo salvo com sucesso.');

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