import { Component, input } from '@angular/core';

export type Example = { header: string; description: string };

@Component({
  selector: 'noc-example',
  host: { class: 'flex w-80 flex-col gap-1 cursor-pointer' },
  template: `
    @let header = example().header;
    @let description = example().description;

    <h4 class="text-lg font-medium">{{ header }}</h4>
    <h5 class="text-sm">{{ description }}</h5>
  `,
})
export class ExampleComponent {
  public example = input.required<Example>();
}
