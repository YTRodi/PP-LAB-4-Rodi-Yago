import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public formLogin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private angularFireAuthService: AuthService
  ) {
    this.formLogin = this.fb.group({
      email: new FormControl('admin@gmail.com', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('123456', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  cargarDataAdmin() {
    this.formLogin.get('email')?.setValue('admin@gmail.com');
    this.formLogin.get('password')?.setValue('123456');
  }

  cargarDataRepartidor() {
    this.formLogin.get('email')?.setValue('repartidor@gmail.com');
    this.formLogin.get('password')?.setValue('123456');
  }

  async sendForm() {
    try {
      const { email, password } = this.formLogin.value;
      console.log(email, password);
      const user = await this.angularFireAuthService.loginWithEmailAndPassword(
        email,
        password
      );

      if (user) {
        this.router.navigate(['/protected/alta-repartidor']);
        this.formLogin.reset();
      }
    } catch (error) {
      console.log(error);
    }
  }
}
