import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataService } from '@app/shared/services/data.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactersListComponent {
  characters$ = this.dataService.characters$;

  constructor( private dataService: DataService) { }
}
