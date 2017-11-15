import { RaceService } from './../../services/race.service';
import { Component, OnInit, Input } from '@angular/core';
import Poney from '../../interfaces/poney.interface';

@Component({
  selector: 'app-poney',
  templateUrl: './poney.component.html',
  styleUrls: ['./poney.component.scss']
})
export class PoneyComponent implements OnInit {

  constructor(private raceService: RaceService) { }

  @Input() poneyId: number;
  poneyData: Poney

  ngOnInit() {
    this.poneyData = this.raceService.ponies.find(poney => {
      return poney.id === this.poneyId
    })
  }

  run() {
    
  }

}
