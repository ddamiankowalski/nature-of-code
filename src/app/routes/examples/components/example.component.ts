import { Component, input } from '@angular/core';

export type Example = { header: string; description: string };

@Component({
  selector: 'noc-example',
  host: { class: 'flex flex-col' },
  template: `
    @let header = example().header;
    @let description = example().description;

    <h4>{{ header }}</h4>
    <h5>{{ description }}</h5>
  `,
})
export class ExampleComponent {
  public example = input.required<Example>();
}
