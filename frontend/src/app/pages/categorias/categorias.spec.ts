import { HttpClient } from '@angular/common/http';

import {
  inject,
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private http = inject(HttpClient);

  private api =
    'http://localhost:8080/categorias';

  listar() {

    return this.http.get<any[]>(
      this.api
    );
  }

  salvar(categoria: any) {

    return this.http.post(
      this.api,
      categoria
    );
  }

  deletar(id: number) {

    return this.http.delete(
      `${this.api}/${id}`
    );
  }
}