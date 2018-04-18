import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  SettingsService,
  SidebarService,
  ShredService,
  UsuarioService,
  LoginGuardGuard,
  SubirArchivoService,
  HospitalService,
  MedicoService,
  AdminGuard
} from './service.index';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [],
  providers: [
    SettingsService,
    SidebarService,
    ShredService,
    UsuarioService,
    LoginGuardGuard,
    AdminGuard,
    SubirArchivoService,
    ModalUploadService,
    HospitalService,
    MedicoService
  ]
})
export class ServiceModule { }
