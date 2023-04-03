import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css'],
})
export class EstudianteComponent {
  nombreControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(10),
  ]);
  apellidoControl = new FormControl('', [Validators.required]);
  emailControl = new FormControl('', [Validators.email, Validators.required]);
  cursoControl = new FormControl('', [Validators.required]);
  passwordControl = new FormControl('', [Validators.required]);
  repasswordControl = new FormControl('', [Validators.required]);
  direccionControl = new FormControl('', [Validators.required]);
  direccion2Control = new FormControl();
  ciudadControl = new FormControl('', [Validators.required]);
  provinciaControl = new FormControl('', [Validators.required]);
  zipControl = new FormControl();
  vipControl = new FormControl(false);

  registerForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      nombre: this.nombreControl,
      apellido: this.apellidoControl,
      email: this.emailControl,
      curso: this.cursoControl,
      password: this.passwordControl,
      direccion: this.direccionControl,
      direccion2: this.direccion2Control,
      ciudad: this.ciudadControl,
      provincia: this.provinciaControl,
      zip: this.zipControl,
      vip: this.vipControl,
    });
  }
  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    } else {
      alert('Error');
    }
  }
}
