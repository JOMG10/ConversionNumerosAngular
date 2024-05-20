import {Component, EventEmitter, Input, Output} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ConversionModalComponent} from "./conversion-modal/conversion-modal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ConversionModalComponent],
  templateUrl: './app.component.html',

  styleUrl: './app.component.css'
})
export class AppComponent {

}
