import { Injectable } from '@angular/core';
import Poney from '../interfaces/poney.interface';
import Race from '../interfaces/race.interface';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class RaceService {

  constructor(private http: Http) { }

  ponies: Poney[] = []

  races: Race[] = []

  getRaces(): Observable<Race[]> {
    // return new Observable(observer => {
    //   observer.next(this.ponies)
    //   observer.complete()
    // })

    let races$ = this.http.get('http://localhost:3000/races')
      .map(result => {
        return result.json()
      })

    races$.subscribe(races => {
      this.races = races
    })

    return races$
  }

  getPonies(): Observable<Poney[]> {
    // return new Observable(observer => {
    //   observer.next(this.ponies)
    //   observer.complete()
    // })

    let ponies$ = this.http.get('http://localhost:3000/ponies')
      .map(result => {
        return result.json()
      })

    ponies$.subscribe(ponies => {
      this.ponies = ponies
    })

    return ponies$
  }

  generateDistance() {
    let distance = Math.random() * 10

    return distance
  }
  
  startRace(id: number): Poney[] {

    let race = this.races.find(race => race.id == id)
    let ponies: Poney[] = this.ponies.filter(poney => race.ponies.includes(poney.id))

    race.isRacing = true

    race.interval = setInterval(() => {
      ponies.forEach((poney) => {
        poney.distance += this.generateDistance()
        if (poney.distance >= 80) {
          this.stopRace(id)
        }
      })
    }, 1000)

    return ponies
  }

  stopRace(id: number) {

    let race = this.races.find(race => race.id == id)
    race.isRacing = false
    clearInterval(race.interval);
  }

  resetRaces() {
    this.races.forEach(race => {
      this.stopRace(race.id)
    })

    this.ponies.forEach(poney => {
      poney.distance = 0
    })
  }

  setRace(race) {
    let id = Math.floor(Math.random() * 100)

    this.races.push({
      id,
      isRacing: false,
      ...race
    })
  }
}
