import { Component } from '@angular/core';
import { HeaderComponent } from './routes/dashboard/components/header.component';

@Component({
  selector: 'noc-root',
  imports: [HeaderComponent],
  template: `<noc-header />`,
})
export class App {}
