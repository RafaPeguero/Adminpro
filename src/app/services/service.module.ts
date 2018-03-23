import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SettingsService,
  SidebarService,
  ShredService
} from './service.index';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    SettingsService,
    SidebarService,
    ShredService]
})
export class ServiceModule { }
