import { Component } from '@angular/core';

@Component({
  selector: 'noc-header',
  template: ` <header class="flex flex-col justify-center items-center my-10">
    <h1 class="font-bold text-5xl [word-spacing: -0.75rem]">
      THE NATURE <br />
      OF CODE
    </h1>
    <h3 class="my-2">IMPLEMENTATION FROM THE BOOK BY DANIEL SHIFFMAN</h3>
  </header>`,
})
export class HeaderComponent {}
