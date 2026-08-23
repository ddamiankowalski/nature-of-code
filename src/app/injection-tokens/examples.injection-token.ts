import { InjectionToken } from '@angular/core';
import { ExampleItem } from '../routes/examples/components/example.component';

/**
 * All examples displayed in the application
 */
export const APP_EXAMPLES = new InjectionToken<ExampleItem[]>('app.examples');
