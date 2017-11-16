import { RaceService } from './../../services/race.service';
import { Component, OnInit, Input } from '@angular/core';
import Poney from '../../interfaces/poney.interface';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations'
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss'],
  animations: [
    trigger('bubbleState', [
      state('rested', style({
        backgroundColor: 'orangered',
        transform: 'scale(1)'
      })),
      state('inflated', style({
        backgroundColor: 'orange',
        transform: 'scale(1.1)'
      })),
      transition('rested => inflated', animate('600ms ease-in-out')),
      transition('inflated => rested', animate('600ms ease-in-out'))
    ])
  ]
})
export class RaceComponent implements OnInit {

  ponies: Poney[]

  bubbleInflation: string = 'rested'

  id$: Observable<string>
  
  constructor(
    public raceService: RaceService,
    public routeParams: ActivatedRoute
  ) {
    this.id$ = routeParams.params.map(params => params.id)

    this.id$.subscribe((id: string) => {
      this.initRace(parseInt(id))
    })
  }

  initRace(id: number) {
    this.ponies = this.raceService.startRace(id)
  }

  initBubbleAnimation() {
    setInterval(() => {
      this.bubbleInflation = this.bubbleInflation == 'inflated' ? 'rested' : 'inflated'
    }, 600)
  }

  ngOnInit() {
    this.initBubbleAnimation()
  }
  
  ngOnDestroy() {
    this.raceService.resetRaces()
  }
}
