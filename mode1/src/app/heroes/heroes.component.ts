import { HeroService } from './../hero.service';
import { HEROES } from './../mock_heroes';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

constructor( private heroService: HeroService ) {}

getHeroes(): void {
  this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
}

  ngOnInit() {
    this.getHeroes();
  }
}