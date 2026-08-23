import { inject } from '@angular/core';
import { RedirectCommand, ResolveFn, Router } from '@angular/router';
import { APP_EXAMPLES } from '../../injection-tokens/examples.injection-token';
import { type ExampleItem } from '../examples/components/example.component';

/**
 * Resolves the example named by the `:id` param, or redirects to the list.
 *
 * Returning a `RedirectCommand` makes `@angular/ssr` answer with a 302 instead of
 * rendering the page, so unknown ids never reach the browser as HTML.
 */
export const exampleResolver: ResolveFn<ExampleItem> = (route) => {
  const id = route.paramMap.get('id');

  const example = inject(APP_EXAMPLES).find((example) => example.id === id);
  const router = inject(Router);

  if (!example) {
    const url = router.parseUrl('/');
    return new RedirectCommand(url);
  }

  return example;
};
