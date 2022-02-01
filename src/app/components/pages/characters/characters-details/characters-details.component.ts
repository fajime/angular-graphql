import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take, tap } from 'rxjs/operators';


@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.scss']
})
export class CharactersDetailsComponent implements OnInit {

  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.params.pipe(
      take(1),
      tap(({ id }) => console.log( 'PARAMS: ', id ))
    ).subscribe();
  }

}