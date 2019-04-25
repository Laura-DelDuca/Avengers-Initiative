import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  title = 'Avengers Initiative';

  public heroes = [];

  constructor(private _heroService: HeroService, private router: Router) { }

  ngOnInit() {
    this._heroService.getHeroes()
      .subscribe(data => this.heroes = data);
  }

  onSelect(hero) {
    this.router.navigate(['/heroes', hero.id]);
  }
}

