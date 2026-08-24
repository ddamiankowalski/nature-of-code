import type p5 from 'p5';

/**
 * Every available sketch, keyed by the `scriptName` of an `ExampleItem`.
 */
export const SKETCHES = {
  'random-walker': () => import('./random-walker').then((m) => m.default),
} satisfies Record<string, () => Promise<(p: p5) => void>>;

export type SketchName = keyof typeof SKETCHES;
