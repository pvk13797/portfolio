import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { injectSpeedInsights } from '@vercel/speed-insights';
import { inject } from '@vercel/analytics';
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

injectSpeedInsights();
inject();