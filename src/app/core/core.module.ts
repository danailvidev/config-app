import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


// system
import { EnsureModuleLoadedOnceGuard } from '../shared/module-import-guard';
import { environment } from '../../environments/environment';

// services
import { AppSettingsService } from './appsetting.service';

@NgModule({
  imports: [
    HttpModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [AppSettingsService]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
      super(parentModule);
  }
}
