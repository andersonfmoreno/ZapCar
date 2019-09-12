import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ZapCarSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ZapCarSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [ZapCarSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ZapCarSharedModule {
  static forRoot() {
    return {
      ngModule: ZapCarSharedModule
    };
  }
}
