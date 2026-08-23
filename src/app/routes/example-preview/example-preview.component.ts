import {
  Component,
  ElementRef,
  Injector,
  afterNextRender,
  effect,
  inject,
  input,
  viewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import type p5 from 'p5';
import { type ExampleItem } from '../examples/components/example.component';
import { SKETCHES, type SketchName } from './p5/sketches';

@Component({
  selector: 'noc-example-preview',
  host: { class: 'flex flex-1 flex-col p-8' },
  template: `
    <button (click)="onGoBackClick()" class="mb-6 cursor-pointer flex gap-2">Go back</button>

    <section>
      <h4 class="text-lg font-medium">{{ example().header }}</h4>
      <p class="text-sm">{{ example().description }}</p>
    </section>

    <div #canvas class="mt-6 w-fit"></div>
  `,
})
export class ExamplePreview {
  public example = input.required<ExampleItem>();

  private _canvas = viewChild.required<ElementRef<HTMLDivElement>>('canvas');

  private _router = inject(Router);
  private _injector = inject(Injector);

  constructor() {
    // `afterNextRender` never runs on the server, so everything below is
    // browser-only and p5 stays out of the server bundle.
    afterNextRender(() => {
      effect(
        (onCleanup) => {
          const { scriptName } = this.example();

          let instance: p5 | undefined;
          let disposed = false;

          // Registered synchronously: the sketch may still be loading, in which
          // case the `disposed` flag tears it down on arrival instead.
          onCleanup(() => {
            disposed = true;
            instance?.remove();
          });

          void this._mountSketch(scriptName).then((mounted) => {
            if (disposed) {
              mounted.remove();
            } else {
              instance = mounted;
            }
          });
        },
        { injector: this._injector },
      );
    });
  }

  public onGoBackClick(): void {
    this._router.navigate(['/']);
  }

  private async _mountSketch(scriptName: SketchName): Promise<p5> {
    const [{ default: P5 }, sketch] = await Promise.all([import('p5'), SKETCHES[scriptName]()]);

    // p5's sketch verifier assumes the last <script> on the page is the user's
    // sketch and parses it with acorn. Under hydration that is Angular's
    // `ng-state` JSON, which is not JavaScript, so it logs "Error parsing code".
    (P5 as unknown as { disableSketchChecker: boolean }).disableSketchChecker = true;

    return new P5(sketch, this._canvas().nativeElement);
  }
}
