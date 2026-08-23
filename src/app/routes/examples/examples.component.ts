import { Component } from '@angular/core';
import { Example, type ExampleItem } from './components/example.component';

@Component({
  selector: 'noc-examples',
  imports: [Example],
  host: { class: 'flex flex-col flex-1 min-h-0 p-8' },
  template: `
    @if (examples.length) {
      <div class="flex flex-wrap content-start gap-4">
        @for (example of examples; track $index) {
          @defer (hydrate on interaction) {
            <noc-example [example]="example" />
          }
        }
      </div>
    } @else {
      <div class="flex flex-1 items-center justify-center">
        There are no examples yet. Come back in the future
      </div>
    }
  `,
})
export class Examples {
  public readonly examples: ExampleItem[] = [
    {
      id: 'random-walker',
      header: 'Random Walker',
      description: 'Explore what exactly is a random walker and how it behaves on canvas',
    },
  ];
}
