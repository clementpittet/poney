import { Injectable } from '@angular/core';
import Poney from '../interfaces/poney.interface';

@Injectable()
export class RaceService {

  isRacing: boolean;
  raceInterval;

  constructor() { }

  ponies: Poney[] = [
    {
      id: 0,
      name: 'Malthe E. Bertelsen',
      img: 'http://ponyracer.ninja-squad.com/assets/images/pony-green-running.gif',
      rainbowImg: 'http://ponyracer.ninja-squad.com/assets/images/pony-green-rainbow.gif',
      distance: 0
    },
    {
      id: 1,
      name: 'Edmondo Cremonesi',
      img: 'http://ponyracer.ninja-squad.com/assets/images/pony-purple-running.gif',
      rainbowImg: 'http://ponyracer.ninja-squad.com/assets/images/pony-purple-rainbow.gif',
      distance: 0
    },
    {
      id: 2,
      name: 'Camille Brault',
      img: 'http://ponyracer.ninja-squad.com/assets/images/pony-orange-running.gif',
      rainbowImg: 'http://ponyracer.ninja-squad.com/assets/images/pony-orange-rainbow.gif',
      distance: 0
    }
  ]

  generateDistance() {
    let distance = Math.random() * 10

    return distance
  }
  
  startRace() {
    this.isRacing = true

    this.raceInterval = setInterval(() => {
      this.ponies.forEach((poney) => {
        poney.distance += this.generateDistance()
        if (poney.distance >= 90) {
          this.stopRace()
        }
      })
    }, 1000)
  }

  stopRace() {
    this.isRacing = false
    clearInterval(this.raceInterval);
  }

}
