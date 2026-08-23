import { Routes } from '@angular/router';
import { Examples } from './routes/examples/examples.component';
import { ExamplePreview } from './routes/example-preview/example-preview.component';
import { ExampleGuard } from './routes/example-preview/example-preview.guard';

export const routes: Routes = [
  {
    path: '',
    component: Examples,
  },
  {
    path: 'example-preview/:id',
    component: ExamplePreview,
    canActivate: [ExampleGuard],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
