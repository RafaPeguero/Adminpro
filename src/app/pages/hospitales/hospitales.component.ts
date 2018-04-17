import { Component, OnInit } from '@angular/core';
import { Hospital } from '../../models/hospital.model';
import { HospitalService } from '../../services/service.index';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

declare var swal: any;

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styles: []
})
export class HospitalesComponent implements OnInit {
  hospitales: Hospital[] = [];

  constructor( public _HospitalService: HospitalService,
                public _modalUpload: ModalUploadService) { }

  ngOnInit() {
    this.cargarHospitales();
    this._modalUpload.notificacion.subscribe(() => this.cargarHospitales());
  }

  buscarHopital( termino: string) {
    if ( termino.length <= 0) {
      this.cargarHospitales();
      return;
    }
    this._HospitalService.buscarHospital(termino).subscribe( hospitales => this.hospitales = hospitales);
  }
  cargarHospitales() {
    this._HospitalService.cargarHospitales().subscribe(hospitales => this.hospitales = hospitales);
  }

  guardarHospital( hospital: Hospital) {
    this._HospitalService.actualizarHospital(hospital).subscribe();
  }

  borrarHospital(hospital: Hospital) {
    this._HospitalService.borrarHospital(hospital._id).subscribe( () => this.cargarHospitales());
  }
  crearHospital() {
    swal({
      title: 'Crear hospial',
      text: 'Ingrese el nombre del hospital',
      content: 'input',
      icon: 'info',
      buttons: true,
      dangerMode: true
    }).then((valor: string) => {
      if (!valor || valor.length === 0) {
        return;
      }
      this._HospitalService.crearHospital(valor).subscribe(() => this.cargarHospitales());
    });
  }

  actualizarImagen(hospital: Hospital) {
    this._modalUpload.MostrarModal('hospitales', hospital._id);
  }

}
