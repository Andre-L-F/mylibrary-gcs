import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-atrasados',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './atrasados.html',
  styleUrl: './atrasados.scss'
})
export class Atrasados implements OnInit {

  emprestimosAtrasados: any[] = [];

  ngOnInit(): void {

    this.carregarAtrasados();

  }

  carregarAtrasados(): void {

    const dados = localStorage.getItem('emprestimos');

    if (!dados) {

      this.emprestimosAtrasados = [];

      return;

    }

    const emprestimos = JSON.parse(dados);

    const hoje = new Date();

    this.emprestimosAtrasados = emprestimos.filter(

      (emprestimo: any) => {

        if (emprestimo.status === 'Devolvido') {
          return false;
        }

        const dataDevolucao = new Date(
          emprestimo.dataDevolucao
        );

        return dataDevolucao < hoje;

      }

    );

    this.emprestimosAtrasados = [

      ...this.emprestimosAtrasados

    ];

  }

  calcularDiasAtraso(data: string): number {

    const hoje = new Date();

    const devolucao = new Date(data);

    const diferenca = hoje.getTime() - devolucao.getTime();

    return Math.floor(

      diferenca / (1000 * 60 * 60 * 24)

    );

  }

}