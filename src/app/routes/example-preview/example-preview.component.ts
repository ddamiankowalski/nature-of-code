import { Component, OnInit, REQUEST, inject, input } from '@angular/core';

@Component({
  selector: 'noc-example-preview',
  host: { class: 'flex flex-1 flex-col gap-2 p-8' },
  template: `
    <h4 class="text-lg font-medium">Preview</h4>
    <p class="text-sm">Example id: {{ id() }}</p>
  `,
})
export class ExamplePreview implements OnInit {
  public readonly id = input.required<string>();
  private readonly _request = inject(REQUEST);

  public ngOnInit(): void {
    if (this._request) {
      console.log(`[SSR] rendering example-preview id="${this.id()}" for ${this._request.url}`);
    }
  }
}
