import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/classes/usuario';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent implements OnInit {
  
  constructor(private router: Router) {}
  
  ngOnInit(): void {
    //localStorage.removeItem('dados_usuario');
  }

  user: Usuario = new Usuario();
  erro!: string;

  validar(usuario: Usuario) : void {
    if(usuario.nome == 'admin' && usuario.senha == 'admin') {
      localStorage.setItem('dados_usuario', usuario.nome);
      this.router.navigate(['/home']);
    } else {
      this.erro = "Usuário ou senha inválidos";
    }
  }
}
