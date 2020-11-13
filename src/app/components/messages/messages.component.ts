import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SimplemessageComponent } from '../simplemessage/simplemessage.component';
import { Router } from '@angular/router';
import { MessagesService } from '../../services/messages/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.sass']
})
export class MessagesComponent implements OnInit {

  mensajes: any = [];

  constructor(public dialog: MatDialog, private router: Router, private ms: MessagesService) { }

  openDialog() {
    const dialogRef = this.dialog.open(SimplemessageComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.ms.messages().subscribe((data) => {
        this.mensajes = data;
      });
    });
  }

  ngOnInit(): void {
    this.ms.messages().subscribe((data) => {
      this.mensajes = data;
    });
  }

  signout() {
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
