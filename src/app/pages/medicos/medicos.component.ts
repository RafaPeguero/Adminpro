import { Component, OnInit } from '@angular/core';
import { Medico } from '../../models/medico.model';
import { MedicoService } from '../../services/service.index';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styles: []
})
export class MedicosComponent implements OnInit {
  medicos: Medico[] = [];
  constructor( public _MedicosServices: MedicoService) { }

  ngOnInit() {
    this.cargarMedicos();
  }

  cargarMedicos() {
    this._MedicosServices.cargarMedicos().subscribe( (medicos: any) => {
      this.medicos = medicos;
    });
  }

  buscarMedico(termino: string) {

    if ( termino.length <= 0) {
      this.cargarMedicos();
      return;
    }
    this._MedicosServices.buscarMedicos(termino).subscribe( medicos => this.medicos = medicos);
  }

  borrarMedico(medico: Medico) {
    this._MedicosServices.borrarMedico(medico._id).subscribe( () => this.cargarMedicos());
  }

}
