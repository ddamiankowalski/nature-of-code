import { Routes } from '@angular/router';
import { ExamplesComponent } from './routes/examples/examples.component';

export const routes: Routes = [
  {
    path: '',
    component: ExamplesComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
