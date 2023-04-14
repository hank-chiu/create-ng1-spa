import path from 'node:path';

export default function (plop) {
  plop.setGenerator('spa-with-ng1', {
    description: 'scaffold SPA with ng1',
    prompts: [
      {
        type: 'input',
        name: 'folderName',
        message: 'folder name',
      },
      {
        type: 'input',
        name: 'ng1ModuleName',
        message: 'ng1 module name',
        default: 'hcXxxApp',
      },
      {
        type: 'input',
        name: 'legacyControllerName',
        message: 'legacy controller name',
        default: 'xxxController',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: path.join(process.cwd(), '{{folderName}}'),
        base: 'templates/spa-with-ng1',
        templateFiles: 'templates/spa-with-ng1/**',
      },
    ],
  });
}
