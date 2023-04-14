import { APP_CONTEXT_KEY } from 'Feature/ng1-migration';

export class Ng1AppController {
  static $inject = [APP_CONTEXT_KEY, '$scope', '$controller'];

  constructor(private appContext: any, private $scope: any, private $controller: any) {}

  $onInit() {
    const legacyController = this.$controller('{{legacyControllerName}} as vm', {
      $scope: this.$scope,
    });
    legacyController.initial(this.appContext);
  }
}
