import { HttpClient } from '@angular/common/http';

import {
  inject,
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private http = inject(HttpClient);

  private api =
    'http://localhost:8080/livros';

    // private api = 'https://api.example.com/livros';
    
  listar() {

    return this.http.get<any[]>(
      this.api
    );
  }

  salvar(livro: any) {

    return this.http.post(
      this.api,
      livro
    );
  }

  deletar(id: number) {

    return this.http.delete(
      `${this.api}/${id}`
    );
  }
}