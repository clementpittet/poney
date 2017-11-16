import { RaceService } from './../../services/race.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import Poney from '../../interfaces/poney.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-race-create',
  templateUrl: './race-create.component.html',
  styleUrls: ['./race-create.component.scss']
})
export class RaceCreateComponent implements OnInit {

  ponies$: Observable<Poney[]>

  race: FormGroup

  constructor(
    private raceService: RaceService,
    private routerService: Router
  ) {
    this.ponies$ = raceService.getPonies()

    this.race = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      ponies: new FormControl([], [
        this.minPonies(2)
      ])
    })
  }

  minPonies(min) {
    return (ponies) => {
      if (ponies.value.length < min) {
        return { minPonies: min }
      } else {
        return undefined
      }
    }
  }

  ngOnInit() {
  }

  handleSubmit(event: any) {
    if (this.race.valid) {
      this.raceService.setRace(this.race.value).subscribe(result => {
        this.routerService.navigateByUrl('/home')
      })
    }
  }

}
