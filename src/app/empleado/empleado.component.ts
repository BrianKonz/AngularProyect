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
  //empresa = 'Tufud'

  cargaEmpresa(value:String){
    //Esta función sirve para cargar la empresa desde el botón.
  };

  usuRegistrado = false;
  // para hacer el binding

  getRegistroUsuario () {
    this.usuRegistrado = false;
  };
  // binding con función



  constructor() { }

  ngOnInit(): void {
  }

}
