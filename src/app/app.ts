import { Component } from '@angular/core';
import { HeaderComponent } from './routes/dashboard/components/header.component';

@Component({
  selector: 'noc-root',
  imports: [HeaderComponent],
  template: `<noc-header class="flex justify-center w-full" />`,
})
export class App {}
