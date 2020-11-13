import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register/register.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private toastr: ToastrService, private fb: FormBuilder, public router: Router, public rs: RegisterService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: [
        ''
      ],
      password: [
        ''
      ]
    });
  }

  signup() {
    this.rs.register(this.registerForm.value).subscribe((result: any) => {
      if (result.status) {
        sessionStorage.setItem('token', result.token);
        this.toastr.success('Registro Exitoso!!!', 'Success');
        this.router.navigate(['/messages']);
      } else {
        this.toastr.error('No se pudeo registrar el usuario!!!', 'Error');
      }
    });
  }
}
