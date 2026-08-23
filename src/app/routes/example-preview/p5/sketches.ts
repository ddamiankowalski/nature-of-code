import type p5 from 'p5';

export type Sketch = (p: p5) => void;

/**
 * Every available sketch, keyed by the `scriptName` of an `ExampleItem`.
 *
 * The map is written out rather than built from `import('./' + name)` because
 * bundlers cannot statically analyse a fully dynamic specifier. Each entry is a
 * lazy import, so a sketch is only downloaded when its example is opened.
 */
export const SKETCHES = {
  'random-walker': () => import('./random-walker.sketch').then((m) => m.randomWalkerSketch),
} satisfies Record<string, () => Promise<Sketch>>;

export type SketchName = keyof typeof SKETCHES;
