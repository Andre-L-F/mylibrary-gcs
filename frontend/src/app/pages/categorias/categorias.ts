import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './categorias.html',
  styleUrl: './categorias.scss'
})
export class Categorias implements OnInit {

  form: FormGroup;

  categorias: any[] = [];

  constructor(
    private fb: FormBuilder
  ) {

    this.form = this.fb.group({

      nome: [''],

      descricao: ['']

    });

  }

  ngOnInit(): void {

    this.carregarCategorias();

  }

  // Simula carregamento de dados do backend
  
  carregarCategorias(): void {

    const dados = localStorage.getItem('categorias');

    if (dados) {

      this.categorias = JSON.parse(dados);

    } else {

      this.categorias = [];

    }

    // força atualização
    this.categorias = [...this.categorias];

  }

  salvar(): void {

    if (this.form.invalid) {
      return;
    }

    const valores = this.form.value;

    const novaCategoria = {

      id: Date.now(),

      nome: valores.nome,

      descricao: valores.descricao

    };

    this.categorias = [

      ...this.categorias,

      novaCategoria

    ];

    localStorage.setItem(

      'categorias',

      JSON.stringify(this.categorias)

    );

    this.form.reset({

      nome: '',

      descricao: ''

    });

  }

  deletar(id: number): void {

    this.categorias = this.categorias.filter(

      categoria => categoria.id !== id

    );

    localStorage.setItem(

      'categorias',

      JSON.stringify(this.categorias)

    );

  }

}