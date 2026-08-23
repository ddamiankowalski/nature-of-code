import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export type ExampleItem = { id: string; header: string; description: string };

@Component({
  selector: 'noc-example',
  imports: [RouterLink],
  host: { class: 'contents' },
  template: `
    @let example = this.example();

    <a
      [routerLink]="['/example-preview', example.id]"
      class="flex w-80 cursor-pointer flex-col gap-1 rounded-sm select-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
    >
      <h4 class="text-lg font-medium">{{ example.header }}</h4>
      <h5 class="text-sm">{{ example.description }}</h5>
    </a>
  `,
})
export class Example {
  public example = input.required<ExampleItem>();
}
