import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'hello-angular';
  marques = ['Renault', 'Peugeot', 'Citroën'];
  marqueSelected = 'Peugeot';
}
