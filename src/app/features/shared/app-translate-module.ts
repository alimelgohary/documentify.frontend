import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideTranslateCompiler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { provideTranslateHttpLoader, TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { HttpBackend } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class AppTranslateModule {
  static forRoot(): ModuleWithProviders<AppTranslateModule> {
    return TranslateModule.forRoot({
      fallbackLang: 'en',
      loader: provideTranslateHttpLoader({ prefix: './i18n/', suffix: '.json' }),
      compiler: provideTranslateCompiler(TranslateMessageFormatCompiler),
    });
  }
  static forChild(featureName: string): ModuleWithProviders<AppTranslateModule> {
    return TranslateModule.forChild({
      fallbackLang: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: GetFactoryByFeature(featureName),
        deps: [HttpBackend]
      },
      compiler: provideTranslateCompiler(TranslateMessageFormatCompiler),
      isolate: false
    });
  }
}


export function GetFactoryByFeature(featureName: string) {
  return (http: HttpBackend) => new MultiTranslateHttpLoader(http, [
    { prefix: './i18n/', suffix: '.json' },          // Global
    { prefix: `./i18n/features/${featureName}/`, suffix: '.json' } // Feature
  ]);
}

