import { Routes } from '@angular/router';
import { Examples } from './routes/examples/examples.component';
import { ExamplePreview } from './routes/example-preview/example-preview.component';
import { exampleResolver } from './routes/example-preview/example-preview.resolver';

export const routes: Routes = [
  {
    path: '',
    component: Examples,
  },
  {
    path: 'example-preview/:id',
    component: ExamplePreview,
    resolve: { example: exampleResolver },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
