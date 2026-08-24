import { Component, ElementRef, afterNextRender, inject, input, viewChild } from '@angular/core';
import { Router } from '@angular/router';
import type p5 from 'p5';
import { type ExampleItem } from '../examples/components/example.component';
import { SKETCHES, type SketchName } from './p5/sketches';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { phosphorArrowBendUpLeftBold } from '@ng-icons/phosphor-icons/bold';
@Component({
  selector: 'noc-example-preview',
  host: { class: 'flex flex-1 flex-col p-8' },
  imports: [NgIcon],
  providers: [provideIcons({ phosphorArrowBendUpLeftBold })],
  template: `
    <section class="flex gap-6 items-center">
      <button
        (click)="onGoBackClick()"
        class="flex justify-center items-center cursor-pointer w-14 h-14 rounded-lg border-[1.5px] transition-colors hover:bg-current hover:[--ng-icon__color:white]"
      >
        <ng-icon name="phosphorArrowBendUpLeftBold" class="transition-colors" />
      </button>

      <div>
        <h4 class="text-3xl font-medium">{{ example().header }}</h4>
        <p class="text-lg">{{ example().description }}</p>
      </div>
    </section>

    <div #canvas class="mt-8 w-fit"></div>
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
