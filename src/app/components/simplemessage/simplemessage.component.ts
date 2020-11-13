import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MessagesService } from '../../services/messages/messages.service';

@Component({
  selector: 'app-simplemessage',
  templateUrl: './simplemessage.component.html',
  styleUrls: ['./simplemessage.component.sass']
})
export class SimplemessageComponent implements OnInit {

  messageForm: FormGroup;

  constructor(private toastr: ToastrService, private fb: FormBuilder, private ms: MessagesService) { }

  ngOnInit(): void {
    this.messageForm = this.fb.group({
      message: [
        ''
      ]
    });
  }

  postmessage() {
    this.ms.postmessage({ message: this.messageForm.value.message, token: sessionStorage.getItem('token') });
  }

  sendmessage() {
    this.ms.postmessage({ message: this.messageForm.value.message, token: sessionStorage.getItem('token') }).subscribe((data) => {
      this.toastr.success('Se creo el mensaje correctamente', 'Success');
    });
  }

}
