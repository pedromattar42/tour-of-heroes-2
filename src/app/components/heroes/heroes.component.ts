import { Hero } from './../../heroe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id:1,
    name: 'Wolverine'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
