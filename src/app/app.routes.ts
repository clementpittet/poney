import { RaceComponent, HomeComponent, RaceCreateComponent } from './components';
import { Routes } from '@angular/router';

const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'race/:id',
    component: RaceComponent
  },
  {
    path: 'race',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'race-create',
    component: RaceCreateComponent
  }
]

export default rootRouterConfig