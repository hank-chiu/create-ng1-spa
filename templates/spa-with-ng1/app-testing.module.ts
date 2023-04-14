import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { BaseTestingModule } from 'Lib/angular/base-testing.module';

@NgModule({
  imports: [BaseTestingModule, RouterTestingModule],
})
export class AppTestingModule {}
