import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HcPageBarModule } from 'Feature/page-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DowngradeModule } from './downgrade.module';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, AppRoutingModule, HcPageBarModule, DowngradeModule],
})
export class AppModule {}
