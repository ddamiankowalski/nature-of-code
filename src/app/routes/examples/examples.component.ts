import { Component } from '@angular/core';
import { Example, ExampleComponent } from './components/example.component';

@Component({
  selector: 'noc-examples',
  imports: [ExampleComponent],
  host: { class: 'flex flex-col flex-1 min-h-0' },
  template: `
    @for (example of examples; track $index) {
      <noc-example [example]="example" />
    } @empty {
      <div class="flex flex-1 items-center justify-center">
        There are no examples yet. Come back in the future
      </div>
    }
  `,
})
export class ExamplesComponent {
  public readonly examples: Example[] = [
    {
      header: 'Random Walker',
      description: 'Explore what exactly is a random walker and how it behaves on canvas',
    },
  ];
}
