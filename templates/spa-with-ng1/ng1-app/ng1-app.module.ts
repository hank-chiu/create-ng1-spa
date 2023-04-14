import { DowngradeModule } from '../downgrade.module';
import { Ng1AppController } from './ng1-app.controller';
import template from './ng1-app.html';

declare const angular: any;

export const appModule = angular
  .module('{{ng1ModuleName}}', ['ngRoute', 'hcApp', DowngradeModule.moduleName])
  .component('ng1AppRoot', {
    controller: Ng1AppController,
    controllerAs: 'vm',
    template,
  });
