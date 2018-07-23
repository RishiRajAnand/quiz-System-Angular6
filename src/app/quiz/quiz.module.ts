import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import {
  L10nConfig,
  L10nLoader,
  LocalizationModule,
  ProviderType
} from 'angular-l10n';

const l10nConfig: L10nConfig = {
  translation: {
      providers: [
          { type: ProviderType.Static, prefix: './assets/l10n/assets-manager-' }
      ],
      composedKeySeparator: '.'
  }
};

import { SharedModule } from '../shared/shared.module';
import {
  QuizDetail,
  QuizService,
  FileSizePipe,
  QuizRoute
} from './';

@NgModule({
  declarations: [
    FileSizePipe
  ],
  imports: [
    FormsModule,
    CKEditorModule,
    SharedModule,
    RouterModule.forChild(quizRoute),
    LocalizationModule.forChild(l10nConfig)
  ],
  providers: [QuizService],
  entryComponents: []
  // exports: [
  //  RouterModule
  // ]
})
export class QuizModule {
  constructor(public l10nLoader: L10nLoader) {
    this.l10nLoader.load();
  }
}
