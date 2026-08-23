import { Component, OnInit, REQUEST, computed, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { APP_EXAMPLES } from '../../injection-tokens/examples.injection-token';

@Component({
  selector: 'noc-example-preview',
  host: { class: 'flex flex-1 flex-col p-8' },
  template: `
    <button (click)="onGoBackClick()" class="mb-8 cursor-pointer flex gap-2">Go back</button>

    @if (example(); as example) {
      <section>
        <h4 class="text-3xl font-medium mb-1">{{ example.header }}</h4>
        <p class="text-base">{{ example.description }}</p>
      </section>
    }
  `,
})
export class ExamplePreview implements OnInit {
  public id = input.required<string>();
  public examples = inject(APP_EXAMPLES);

  public example = computed(() => {
    const id = this.id();
    return this.examples.find((example) => example.id === id) || null;
  });

  private _router = inject(Router);
  private _request = inject(REQUEST);

  public ngOnInit(): void {
    if (this._request) {
      console.log(`[SSR] rendering example-preview id="${this.id()}" for ${this._request.url}`);
    }
  }

  public onGoBackClick(): void {
    this._router.navigate(['/']);
  }
}
