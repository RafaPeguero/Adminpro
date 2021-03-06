import { Component, OnInit } from '@angular/core';
import { SubirArchivoService } from '../../services/subir-archivo/subir-archivo.service';
import { ModalUploadService } from './modal-upload.service';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: []
})
export class ModalUploadComponent implements OnInit {

  // usuario: Usuario;
  imagenTemp: String;

  imagenSubir: File;


  constructor( public _subirArchivoService: SubirArchivoService,
                public _modalUploadService: ModalUploadService) { }

  ngOnInit() {

  }

  cerrarModal() {
    this.imagenTemp = null;
    this.imagenSubir = null;

    this._modalUploadService.ocultarModal();
  }

  subirImagen() {
    this._subirArchivoService.subirArchivo( this.imagenSubir, this._modalUploadService.tipo, this._modalUploadService.id)
    .then(resp => {
      this._modalUploadService.notificacion.emit(resp);
      this.cerrarModal();
    }).catch(err => {
      console.log('Error en la carga... ');
    });
  }

  seleccionImage( archivo: File ) {
    if ( !archivo ) {
      this.imagenSubir = null;
    }
    if ( archivo.type.indexOf('image') < 0 ) {
      swal('Sólo imágenes', 'El archivo seleccionado no es una imagen', 'error');
      this.imagenSubir = null;
      return;
    }

    this.imagenSubir = archivo;

    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL(archivo);

    reader.onloadend = () => this.imagenTemp = reader.result;
  }


}
