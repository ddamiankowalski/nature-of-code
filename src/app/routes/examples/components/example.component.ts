import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { type SketchName } from '../../example-preview/p5/sketches';

export type ExampleItem = {
  id: string;
  header: string;
  description: string;
  scriptName: SketchName;
};

@Component({
  selector: 'noc-example',
  imports: [RouterLink],
  host: { class: 'contents' },
  template: `
    @let example = this.example();

    <a
      [routerLink]="['/example-preview', example.id]"
      class="group flex w-80 cursor-pointer flex-col gap-1 rounded-lg border-[1.5px] p-4 select-none"
    >
      <h4 class="text-xl font-medium group-hover:underline">{{ example.header }}</h4>
      <h5 class="text-base">{{ example.description }}</h5>
    </a>
  `,
})
export class Example {
  public example = input.required<ExampleItem>();
}
