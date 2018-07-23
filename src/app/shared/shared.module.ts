import { NgModule, Inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  AccordionModule,
  BsDatepickerModule,
  TooltipModule,
  ModalModule,
  AlertModule
} from 'ngx-bootstrap';
import {
  L10nConfig,
  L10nLoader,
  LocalizationModule,
  ProviderType,
  TRANSLATION_CONFIG,
  TranslationConfig
} from 'angular-l10n';


import { NotFoundComponent } from './not-found/not-found.component';
import {
  SanitizeHtmlPipe,
  KeysPipe,
  SharedServices,
  PageinatorService,
  SpinnerComponent,
  PaginatorComponent,
  ShowErrorsComponent,
  DefaultImageDirective,
  AutofocusDirective,
  CanDeactivateGuard
} from './index';

const l10nConfig: L10nConfig = {
  translation: {
    providers: [],
    composedKeySeparator: '.'
  }
};

@NgModule({
  declarations: [
    NotFoundComponent,
    SpinnerComponent,
    KeysPipe,
    DefaultImageDirective,
    AutofocusDirective,
    SanitizeHtmlPipe,
    PaginatorComponent,
    ShowErrorsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AccordionModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TooltipModule.forRoot(),
    LocalizationModule.forChild(l10nConfig)
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    // Bootsrap Modules Start
    AccordionModule,
    BsDatepickerModule,
    TooltipModule,
    AccordionModule,
    ModalModule,
    AlertModule,
    // Bootsrap Modules End
    // Components Start
    NotFoundComponent,
    SpinnerComponent,
    PaginatorComponent,
    ShowErrorsComponent,
    // Components End
    // Pipes and Directives Start
    KeysPipe,
    DefaultImageDirective,
    // AutofocusDirective,
    SanitizeHtmlPipe
    // Pipes and Directives Start
  ],
  providers: [SharedServices, PageinatorService, CanDeactivateGuard]
})
export class SharedModule {
  constructor(
    @Inject(TRANSLATION_CONFIG) private translationConfig: TranslationConfig,
    public l10nLoader: L10nLoader
  ) {
    this.translationConfig.providers.push({
      type: ProviderType.Static,
      prefix: './assets/l10n/shared-'
    });
    this.l10nLoader.load();
  }
}
