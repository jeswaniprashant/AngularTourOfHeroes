import { MessagesService } from './messages.service';
import { Observable, of } from 'rxjs';
import { HEROES } from './mock_heroes';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: Fetched Heroes');
    return of (HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched Hero id = ${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
  constructor(private messageService: MessagesService) { }
}
