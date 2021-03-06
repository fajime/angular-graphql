import { Component, Input, OnInit } from '@angular/core';
import { Character } from '@app/shared/models/models';

@Component({
  selector: 'app-characters-card',
  templateUrl: './characters-card.component.html',
  styleUrls: ['./characters-card.component.scss']
})
export class CharactersCardComponent implements OnInit {

  @Input() character: Character;

  constructor() { }

  ngOnInit(): void {
  }

}
