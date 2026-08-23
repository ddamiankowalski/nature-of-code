import { Component, inject, input, output } from '@angular/core';
import { Router } from '@angular/router';

export type ExampleItem = { id: string; header: string; description: string };

@Component({
  selector: 'noc-example',
  host: {
    role: 'button',
    tabindex: '0',
    class:
      'flex w-80 cursor-pointer flex-col gap-1 rounded-sm select-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current',
    '(click)': 'onClick()',
    '(keydown.enter)': 'onClick()',
    '(keydown.space)': 'onSpace($event)',
  },
  template: `
    @let header = example().header;
    @let description = example().description;

    <h4 class="text-lg font-medium">{{ header }}</h4>
    <h5 class="text-sm">{{ description }}</h5>
  `,
})
export class Example {
  public example = input.required<ExampleItem>();

  private _router = inject(Router);

  protected onClick(): void {
    const { id } = this.example();
    this._router.navigate(['/details/' + id]);
  }

  protected onSpace(event: Event): void {
    event.preventDefault();
    this.onClick();
  }
}
