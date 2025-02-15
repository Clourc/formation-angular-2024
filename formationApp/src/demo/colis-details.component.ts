import { Component, Input } from '@angular/core';
import { Colis } from '../utils/colis';

@Component({
  selector: 'colis-detail',
  template: `
    <h3>Details</h3>
    <div class="box">
      <div>
        @if(selectedColis) {
        {{ selectedColis.details }}
        } @else { Aucun colis sélectionné }
      </div>
    </div>
  `,
  styles: ``,
})
export class ColisDetailsComponent {

  @Input() selectedColis?: Colis;
}
