import { NgModule, NgModuleRef } from '@angular/core';
import { downgradeModuleFactory } from 'Feature/ng1-migration';

let DOWNGRADED_MODULE_NAME: string;

@NgModule({
  declarations: [],
  providers: [],
  imports: [],
})
export class DowngradeModule {
  static get moduleName(): string {
    if (!DOWNGRADED_MODULE_NAME) {
      throw new Error('DOWNGRADED_MODULE_NAME is not defined. Please import DowngradeModule first.');
    }
    return DOWNGRADED_MODULE_NAME;
  }

  constructor(private ref: NgModuleRef<DowngradeModule>) {
    if (!DOWNGRADED_MODULE_NAME) {
      DOWNGRADED_MODULE_NAME = downgradeModuleFactory.create({
        moduleClass: DowngradeModule,
        injector: this.ref.injector,
      });
    }
  }
}
