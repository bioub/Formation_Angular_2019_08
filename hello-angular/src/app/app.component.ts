import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-hello></app-hello>
    
    <app-hello [name]="marqueSelected"></app-hello>
    <app-hello name="Romain"></app-hello>

    <app-count></app-count>
    <app-contact-form></app-contact-form>

    <app-select [items]="['Renault', 'Peugeot', 'Citroën']"></app-select>
    <app-select [items]="marques" [selected]="marqueSelected" (selectedChange)="marqueSelected = $event"></app-select>
    
    <p>La marque sélectionnée est : {{marqueSelected}}</p>
  `,
  styles: []
})
export class AppComponent {
  title = 'hello-angular';
  marques = ['Renault', 'Peugeot', 'Citroën'];
  marqueSelected = 'Peugeot';
}
