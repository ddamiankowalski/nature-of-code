import { InjectionToken } from '@angular/core';
import { type ExampleItem } from '../routes/examples/components/example.component';

const EXAMPLES: ExampleItem[] = [
  {
    id: 'random-walker',
    header: 'Random Walker',
    description: 'Explore what exactly is a random walker and how it behaves on canvas',
    scriptName: 'random-walker',
  },
];

/**
 * All examples displayed in the application.
 *
 * Resolved identically on the server and in the browser. Override with an
 * explicit provider if a platform ever needs a different set.
 */
export const APP_EXAMPLES = new InjectionToken<readonly ExampleItem[]>('app.examples', {
  providedIn: 'root',
  factory: () => EXAMPLES,
});
