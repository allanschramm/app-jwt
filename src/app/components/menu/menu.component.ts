import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  @Input() usuario : string = 'Olá';
  @Output() novoEvento = new EventEmitter<string>();

  executar(valor: string) : void {
    this.novoEvento.emit(valor);
  }
}
