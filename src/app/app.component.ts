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

  numero: string = ''; // Variable para almacenar el número binario ingresado por el usuario
  resultado: number | string = ''; // Variable para almacenar el resultado de la conversión

  constructor() { }

  // Método para convertir el número binario a decimal
  convertir(): void {
    // Verificar si se ha ingresado un número binario válido
    if (!/^[01]+$/.test(this.numero)) {
      this.resultado = 'Por favor, ingresa un número binario válido.';
      return;
    }

    // Convertir el número binario a decimal
    this.resultado = parseInt(this.numero, 2);
  }



}
