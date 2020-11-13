import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private toastr: ToastrService, private fb: FormBuilder, public router: Router, public ls: LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [
        ''
      ],
      password: [
        ''
      ]
    });
  }

  login() {
    this.ls.login(this.loginForm.value).subscribe((data: any) => {
      if (data.status) {
        sessionStorage.setItem('token', data.token);
        this.toastr.success('Login Exitoso!!!', 'Success');
        this.router.navigate(['/messages']);
      } else {
        this.toastr.error('No se pudo iniciar sesion', 'Error');
      }
    });
  }

}
