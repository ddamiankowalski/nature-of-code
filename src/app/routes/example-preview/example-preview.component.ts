import { Component, OnInit, REQUEST, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { type ExampleItem } from '../examples/components/example.component';

@Component({
  selector: 'noc-example-preview',
  host: { class: 'flex flex-1 flex-col p-8' },
  template: `
    <button (click)="onGoBackClick()" class="mb-6 cursor-pointer flex gap-2">Go back</button>

    <section>
      <h4 class="text-lg font-medium">Preview</h4>
      <p class="text-sm">Example id: {{ example().id }}</p>
    </section>
  `,
})
export class ExamplePreview implements OnInit {
  public example = input.required<ExampleItem>();

  private _router = inject(Router);
  private _request = inject(REQUEST);

  public ngOnInit(): void {
    if (this._request) {
      console.log(
        `[SSR] rendering example-preview id="${this.example().id}" for ${this._request.url}`,
      );
    }
  }

  public onGoBackClick(): void {
    this._router.navigate(['/']);
  }
}
