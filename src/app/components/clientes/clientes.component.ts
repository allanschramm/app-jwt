import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';
import { CredentialsService } from 'src/app/services/credentials.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{
  clientes: Cliente[] = [];

  constructor(private service: CredentialsService) { }

  ngOnInit(): void {
    this.service.getClientes()
    .subscribe({
      next: (result) => this.clientes = result,
      error: (err: HttpErrorResponse) => console.log(err)
    });
  }
}
