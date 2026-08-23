import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  input,
  viewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { type ExampleItem } from '../examples/components/example.component';
import { randomWalkerSketch } from './sketches/random-walker.sketch';
import p5 from 'p5';

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
  private _destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(async () => {
      let destroyed = false;
      this._destroyRef.onDestroy(() => (destroyed = true));

      if (destroyed) {
        return;
      }

      // @ts-ignore
      p5.disableSketchChecker = true;

      const instance = new p5(randomWalkerSketch, this._canvas().nativeElement);
      this._destroyRef.onDestroy(() => instance.remove());
    });
  }

  public onGoBackClick(): void {
    this._router.navigate(['/']);
  }
}
