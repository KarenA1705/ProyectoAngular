import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponente } from "./nuevo-componente/nuevo-componente";
import { Online } from "./online/online";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NuevoComponente, Online],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'Hola Angular';
}
