import { Component } from '@angular/core';
import { HeaderComponent } from './routes/dashboard/components/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'noc-root',
  imports: [HeaderComponent, RouterOutlet],
  template: `
    <noc-header class="block w-full" />
    <router-outlet />
  `,
})
export class App {}
