import { RaceService } from './../../services/race.service';
import { Component } from '@angular/core';
import Race from '../../interfaces/race.interface'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  races$: Observable<Race[]>

  constructor(public raceService: RaceService) {}

  ngAfterViewInit() {
    this.races$ = this.raceService.getRaces()

    // TODO : faire du meilleur code
    this.raceService.getPonies()
  }
}
