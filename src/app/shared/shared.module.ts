
// MODULOS!!!
import { NgModule } from '@angular/core';
import { PagesModule } from '../pages/pages.module';

// RUTAS!!!
import { APP_ROUTES } from '../app.routes';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// COMPONENTES!!!
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PipesModule } from '../pipes/pipes.module';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';




@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    PipesModule
  ],
  declarations: [
    NopagefoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumsComponent,
    NopagefoundComponent,
    ModalUploadComponent

  ],
  exports: [
    NopagefoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumsComponent,
    NopagefoundComponent,
    ModalUploadComponent
  ]
})
export class SharedModule {}
