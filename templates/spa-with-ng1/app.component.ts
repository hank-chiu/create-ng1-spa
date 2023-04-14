import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HcDocumentTitle } from 'Feature/document-title-decorator';
import { Ng1AppLoader } from 'Feature/ng1-migration';

import { _T } from './app.component.text_def';

@Component({
  templateUrl: './app.component.html',
  providers: [Ng1AppLoader],
})
export class AppComponent implements OnInit {
  _T = _T;

  @HcDocumentTitle
  PAGE_TITLE = _T.PAGE_TITLE;

  constructor(private ng1AppLoader: Ng1AppLoader, private http: HttpClient) {}

  async ngOnInit() {
    const [appContext, { appModule }] = await Promise.all([
      this.fetchAppContext(),
      import('./ng1-app'),
    ]);
    this.ng1AppLoader.load({ appModule, appContext });
  }

  private async fetchAppContext() {
    // TODO: implement context API
    return await this.http.get('/api/xxx/context/').toPromise();
  }
}
