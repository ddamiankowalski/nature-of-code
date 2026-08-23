import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { APP_EXAMPLES } from './injection-tokens/examples.injection-token';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes)),
    {
      provide: APP_EXAMPLES,
      useValue: [
        {
          id: 'random-walker',
          header: 'Random Walker',
          description: 'Explore what exactly is a random walker and how it behaves on canvas',
        },
      ],
    },
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
