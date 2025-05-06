import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { PessoaService } from './pessoa.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'aula01-view';

  nome = "Joao";

  mostrarModal = false;

  pessoa = {
    nome: '',
    telefone: ''

  }

  pessoas: Array<{ nome: string; telefone: string }> = [];

  constructor(private pessoaService: PessoaService){}

  ngOnInit(): void {
    this.listar();
  }

  abrirModal() {
    this.pessoa = { nome: '', telefone: '' }; // limpa o formulário
    this.mostrarModal = true;
  }
  
  fecharModal() {
    this.mostrarModal = false;
  }

  listar(){
    this.pessoaService.get().subscribe({
      next: (response) => {
        console.log(response);
        this.pessoas = response;
      },
      error: (response) => {}
    });
  }

  salvar(){

    console.log(this.pessoa);
    this.pessoaService.salvarPessoa(this.pessoa).subscribe({
      next: (response) => {
        console.log('deu certo');
        this.listar();
      },
      error: (response) => {
        console.log('deu errado');
      }

    });
    console.log('chamei salvar');
  }

}
