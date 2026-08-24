import { Component, ElementRef, afterNextRender, inject, input, viewChild } from '@angular/core';
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
      <h4 class="text-2xl font-medium">{{ example().header }}</h4>
      <p class="text-md">{{ example().description }}</p>
    </section>

    <div #canvas class="mt-6 w-fit"></div>
  `,
})
export class ExamplePreview {
  public example = input.required<ExampleItem>();

  private _canvas = viewChild.required<ElementRef<HTMLDivElement>>('canvas');
  private _router = inject(Router);

  constructor() {
    afterNextRender(async () => {
      const { scriptName } = this.example();
      await this._mount(scriptName);
    });
  }

  public onGoBackClick(): void {
    this._router.navigate(['/']);
  }

  private async _mount(name: SketchName): Promise<p5> {
    const [{ default: P5 }, sketch] = await Promise.all([import('p5'), SKETCHES[name]()]);

    /**
     * Disabling acorn parsing
     */
    //@ts-ignore
    P5.disableSketchChecker = true;

    const { nativeElement } = this._canvas();
    return new P5(sketch, nativeElement);
  }
}
