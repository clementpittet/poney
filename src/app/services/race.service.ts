import { Injectable } from '@angular/core';
import Poney from '../interfaces/poney.interface';

@Injectable()
export class RaceService {

  raceInterval;

  constructor() { }

  ponies: Poney[] = [
    {
      id: 0,
      name: 'Malthe E. Bertelsen',
      img: 'http://ponyracer.ninja-squad.com/assets/images/pony-green-running.gif',
      distance: 0
    },
    {
      id: 1,
      name: 'Edmondo Cremonesi',
      img: 'http://ponyracer.ninja-squad.com/assets/images/pony-purple-running.gif',
      distance: 0
    },
    {
      id: 2,
      name: 'Camille Brault',
      img: 'http://ponyracer.ninja-squad.com/assets/images/pony-orange-running.gif',
      distance: 0
    }
  ]

  generateDistance() {
    let distance = Math.random() * 10

    return distance
  }
  
  startRace() {
    this.raceInterval = setInterval(() => {
      this.ponies.forEach((poney) => {
        poney.distance += this.generateDistance()
        if (poney.distance >= 80) {
          this.stopRace()
        }
      })
    }, 1000)
  }

  stopRace() {
    clearInterval(this.raceInterval);
  }

}
