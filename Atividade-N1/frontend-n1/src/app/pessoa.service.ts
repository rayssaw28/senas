import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  private baseUrl = 'http://localhost:8080/pessoa';

  constructor(private http: HttpClient) {}

  salvarPessoa(pessoa: any): Observable<any> {
    return this.http.post(this.baseUrl, pessoa);
  }

  get(): Observable<any>{
    return this.http.get(this.baseUrl);
  }
  
}