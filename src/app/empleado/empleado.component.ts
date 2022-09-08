import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  nombre = 'Brian';
  apellido = 'Konz';
  edad = 29;
  empresa = 'Google'


  cargaEmpresa(value:String){
    //Esta función sirve para cargar la empresa desde el botón.
  };

  usuRegistrado = false;
  // Property para hacer el binding

  textoDeRegistro = "No hay nadie registrado";

  getRegistroUsuario () {
    this.usuRegistrado = false;
  };
  // Property binding con función


  setUsuarioRegistrado (event:Event){
    //alert('se acaba de registrar un usuario')

    if((<HTMLInputElement>event.target).value=="si"){
      this.textoDeRegistro = "El usuario se acaba de registrar";
    } else {
      this.textoDeRegistro = "No hay nadie registrado";
    }


  }

  constructor() { }

  ngOnInit(): void {
  }

}
