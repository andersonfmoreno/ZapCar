import { NgModule } from '@angular/core';

import { ZapCarSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [ZapCarSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [ZapCarSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ZapCarSharedCommonModule {}
