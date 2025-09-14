import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  imports: [],
  templateUrl: './interpolacion.html',
  styleUrl: './interpolacion.css'
})

export class Interpolacion {
  protected title = "Universidad Angular";
  protected user = {
   name: "Karen",
   age: 23
  };

  saludar() {
    return `Hola, ${this.user.name}`;
  }
}
