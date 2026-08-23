import { Component } from '@angular/core';

@Component({
  selector: 'noc-header',
  template: ` <header class="flex flex-col items-start p-8">
    <h1 class="font-bold text-6xl">
      THE NATURE <br />
      OF CODE
    </h1>
    <h3 class="text-xl mt-4 text-left">
      IMPLEMENTATION FROM THE BOOK <br />
      BY DANIEL SHIFFMAN
    </h3>
  </header>`,
})
export class HeaderComponent {}
