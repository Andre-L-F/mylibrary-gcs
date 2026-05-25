import { Routes } from '@angular/router';

import { Categorias } from './pages/categorias/categorias';
import { Dashboard } from './pages/dashboard/dashboard';
import { Livros } from './pages/livros/livros';
import { Emprestimos } from './pages/emprestimos/emprestimos';
import { Atrasados } from './pages/atrasados/atrasados';

export const routes: Routes = [

  {
    path: '',
    component: Dashboard
  },

  {
    path: 'livros',
    component: Livros
  },

  {
    path: 'categorias',
    component: Categorias
  },

  {
    path: 'emprestimos',
    component: Emprestimos
  },

  {
    path: 'atrasados',
    component: Atrasados
  }
];