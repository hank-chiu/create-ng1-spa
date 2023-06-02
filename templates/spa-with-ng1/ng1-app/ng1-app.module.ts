import { APP_ROOT_COMP_KEY } from 'Feature/ng1-migration';

import { DowngradeModule } from '../downgrade.module';
import { Ng1AppController } from './ng1-app.controller';
import template from './ng1-app.html';

declare const angular: any;

export const appModule = angular
  .module('{{ng1ModuleName}}', ['ngRoute', 'hcApp', DowngradeModule.moduleName])
  .value(APP_ROOT_COMP_KEY, { controller: Ng1AppController, template });
