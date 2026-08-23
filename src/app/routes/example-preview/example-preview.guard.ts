import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { APP_EXAMPLES } from '../../injection-tokens/examples.injection-token';

/**
 * Keeps the preview route reachable only for known examples.
 *
 * Returning a `UrlTree` makes `@angular/ssr` answer with a 302 to `/` instead of
 * rendering the page, so unknown ids never reach the browser as HTML.
 */
export const ExampleGuard: CanActivateFn = (route) => {
  const id = route.paramMap.get('id');
  const examples = inject(APP_EXAMPLES);

  return examples.some((example) => example.id === id) || inject(Router).parseUrl('/');
};
