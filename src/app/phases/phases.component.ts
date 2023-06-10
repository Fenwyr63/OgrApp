import { Component } from '@angular/core';
import { Hero } from '../hero';
import { OGREST } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './phases.component.html',
  styleUrls: ['./phases.component.css']
})

export class PhasesComponent {

  heroes = OGREST;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
