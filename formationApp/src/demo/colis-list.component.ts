import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Colis } from '../utils/colis';

@Component({
  selector: 'colis-list',
  template: `
    <h3>Liste des colis</h3>

    <div class="card-container">
      @for (colis of colisList; track $index) {
      <button class="card" (click)="selectColis(colis)" tabindex="0">
        {{ colis.title }}
      </button>
      }
    </div>
  `,
  styles: ``,
})
export class ColisListComponent {
  @Input() colisList!: Colis[];

  @Input() selectedColis?: Colis;
  @Output() selectedColisChange: EventEmitter<Colis> = new EventEmitter();

  selectColis(colis: Colis) {
    this.selectedColis = colis;
    this.selectedColisChange.emit(colis);
  }
}
