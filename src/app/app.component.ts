import {Component, EventEmitter, Input, Output} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NzTabComponent, NzTabSetComponent} from "ng-zorro-antd/tabs";
import {FormsModule} from "@angular/forms";
import {NzInputGroupComponent} from "ng-zorro-antd/input";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NzTabComponent, NzTabSetComponent, FormsModule, NzInputGroupComponent],
  templateUrl: './app.component.html',

  styleUrl: './app.component.css'
})
export class AppComponent {
  suffixIconSearch: any;

  numero: string = '';
  resultado: number | string = '';

  constructor() { }

  convertir(): void {
    if (!/^[01]+$/.test(this.numero)) {
      this.resultado = 'Por favor, ingresa un número binario válido.';
      return;
    }
    this.resultado = parseInt(this.numero, 2);
  }



}
