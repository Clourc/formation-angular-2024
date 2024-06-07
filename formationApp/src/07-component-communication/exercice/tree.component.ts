import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Tree } from './tree';

@Component({
  standalone: true,
  imports: [CommonModule],

  selector: 'app-tree',
  template: `
    <div class="folder">
      <div (click)="triggerToggle()">{{ tree.value }}</div>
      @for (branch of tree.children; track $index) {
      <app-tree [tree]="branch" [hidden]="toggle"/>
      }
    </div>
  `,
  styles: `
        :host {
            width: 100%
        }    
        
        .folder {
            padding: 1rem;
            position: relative;
            background-color: var(--box);
            border: solid
        }
    `,
})
export class TreeComponent {
  /* Ce fichier peut être librement modifié pour l'exercice (template et composant) */

  @Input({ required: true })
  tree!: Tree;

  toggle: boolean = false;

  triggerToggle() {
    this.toggle = this.toggle ? false : true;
  }
}
