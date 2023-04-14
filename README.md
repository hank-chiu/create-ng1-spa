# create-ng1-spa

> A command line tool to scaffold [fms](https://github.com/hardcoretech/fms) SPA page with ng1

## Quick start

- Install the CLI manually globally

```sh
git clone https://github.com/hank-chiu/create-ng1-spa
cd create-ng1-spa
npm link
# To uninstall CLI from your system
# npm unlink create-ng1-spa
```

- Execute `create-ng1-spa` under the fms folder where having a `routing.module.ts` that loads the new page AppModule.

  e.g.

  ```sh
  cd $fms/frontend/packages/app/src/page-spa/ocean/export/shipment
  create-ng1-spa
  ```

## Tips

- You can provide CLI arguments to avoid prompt inputs.

  e.g. `create-ng1-spa sampleFolder hcSampleApp sampleController`

## How it works

- [plop#wrapping-plop](https://github.com/plopjs/plop#wrapping-plop)
