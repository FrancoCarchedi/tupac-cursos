import { Component, } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      edad: new FormControl('', [Validators.required, Validators.pattern(/^-?\d+$/)]),// Agrega aquí los otros campos de tu formulario
    });
  }

  onSubmit() {
    console.log(this.formulario.value);
    console.log("El formulario es válido?: ", this.formulario.valid);
    console.log("El nombre es válido?: ", this.formulario.get('nombre')?.valid);
    console.log("El apellido es válido?: ", this.formulario.get('apellido')?.valid);
    console.log("El email es válido?: ", this.formulario.get('email')?.valid);
    console.log("La edad es válida?: ", this.formulario.get('edad')?.valid);
  }

  // constructor() {
  //   personaModel: new FormControl({
  //     nombre: new FormControl(),
  //     apellido: new FormControl(),
  //     edad: new FormControl(),
  //   });
  // }

}
