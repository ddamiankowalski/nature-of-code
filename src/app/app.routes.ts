import { Routes } from '@angular/router';
import { Examples } from './routes/examples/examples.component';

export const routes: Routes = [
  {
    path: '',
    component: Examples,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
