import { RaceService } from './../../services/race.service';
import { Component, OnInit, Input } from '@angular/core';
import Poney from '../../interfaces/poney.interface';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

  constructor(public raceService: RaceService) {}

  ponies: Poney[]

  ngOnInit() {
    this.ponies = this.raceService.ponies
    this.raceService.startRace()
  }
}
