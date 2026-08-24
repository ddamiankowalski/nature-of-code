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
    <div class="flex flex-1 min-h-0 flex-col gap-24 lg:flex-row">
      <section class="flex min-w-0 flex-1 flex-col max-w-150 lg:basis-1/2">
        <div class="flex gap-6 items-center">
          <button
            (click)="onGoBackClick()"
            class="flex justify-center items-center cursor-pointer w-15 h-20 shrink-0 rounded-lg border-[1.5px] transition-colors select-none hover:bg-current hover:[--ng-icon__color:white]"
          >
            <ng-icon name="phosphorArrowBendUpLeftBold" class="transition-colors" />
          </button>

          <div class="min-w-0">
            <h4 class="text-3xl font-medium">{{ example().header }}</h4>
            <p class="text-base">{{ example().description }}</p>
          </div>
        </div>

        <div #canvas class="mt-8 max-w-full overflow-x-auto"></div>
      </section>

      <article class="flex min-w-0 flex-1 flex-col gap-4 overflow-y-auto lg:basis-1/2 mr-10">
        <h4 class="text-3xl font-medium">Lorem ipsum dolor sit amet</h4>

        <p class="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet
          dictum, massa sapien tempor nisl, eget aliquam nibh arcu non lorem. Vivamus dignissim
          turpis id sapien porttitor, at facilisis lacus vulputate.
        </p>

        <p class="text-lg">
          Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et
          commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
          Integer in mauris eu nibh euismod gravida.
        </p>

        <p class="text-lg">
          Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut
          ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a
          quam. Maecenas fermentum consequat mi.
        </p>
      </article>
    </div>
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
