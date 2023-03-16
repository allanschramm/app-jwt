import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private router: Router) { }

  nome!: string;  // nome do usuário a ser repassado para o componente menu

  ngOnInit(): void {
    this.atribuirUsuario();
  }

  atribuirUsuario() : void {
    if(localStorage.getItem('dados_usuario')){
      this.nome = `Olá, ${localStorage.getItem('dados_usuario')}`;
    } else {
      this.nome = "Efetuar Login";
    }
  }
  
  mostrar(texto: string) : void {
    localStorage.removeItem('dados_usuario');
    this.atribuirUsuario();
    this.router.navigate(['/']);
  }

  onActivate(event: any) : void {
    this.atribuirUsuario();
  }
}
