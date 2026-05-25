import { HttpClient } from '@angular/common/http';

import {
  inject,
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private http = inject(HttpClient);

  private api =
    'http://localhost:8080/dashboard';

  obterDados() {

    return this.http.get<any>(
      this.api
    );
  }
}