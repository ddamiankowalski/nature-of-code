import { Component } from '@angular/core';

type Example = { header: string; description: string };

@Component({
  selector: 'noc-examples',
  template: `
    @for (example of examples; track $index) {
      <h1>{{ example.header }}</h1>
    } @empty {
      <div class="flex items-center justify-center w-full h-full">
        There are no examples yet. Come back in the future
      </div>
    }
  `,
})
export class ExamplesComponent {
  public readonly examples: Example[] = [];
}
