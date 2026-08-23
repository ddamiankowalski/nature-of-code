import { Component } from '@angular/core';

type Example = { header: string; description: string };

@Component({
  selector: 'noc-examples',
  host: { class: 'flex flex-col flex-1 min-h-0' },
  template: `
    @for (example of examples; track $index) {
      <h1>{{ example.header }}</h1>
    } @empty {
      <div class="flex flex-1 items-center justify-center">
        There are no examples yet. Come back in the future
      </div>
    }
  `,
})
export class ExamplesComponent {
  public readonly examples: Example[] = [];
}
