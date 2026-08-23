import { Component } from '@angular/core';
import { HeaderComponent } from './routes/dashboard/components/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'noc-root',
  imports: [HeaderComponent, RouterOutlet],
  host: { class: 'flex flex-col h-full' },
  template: `
    <noc-header />
    <router-outlet />
  `,
})
export class App {}
