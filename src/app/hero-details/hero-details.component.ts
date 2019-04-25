import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  private _heroes = [];
  private _heroId;
  
  public selectedHero;

  constructor(private _heroService: HeroService, private route: ActivatedRoute) { }

  ngOnInit() {
    this._heroService.getHeroes().subscribe(data=>{
      this._heroes = data;
      this.route.paramMap.subscribe((params:ParamMap) => {
        const id = parseInt(params.get('id'));
        this._heroId = id;
        this.selectedHero = this._heroes.find(({id}) => id === this._heroId);
      });
    });
  }
}
