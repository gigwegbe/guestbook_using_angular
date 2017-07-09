import { Component, OnInit } from '@angular/core';
import {GuestBook} from '../guestbook.model';


@Component({
  selector: 'app-guestbook-form',
  templateUrl: './guestbook-form.component.html',
  styleUrls: ['./guestbook-form.component.css']
})
export class GuestbookFormComponent implements OnInit {

  model = new GuestBook(1,'','','','');

  constructor() { }

  ngOnInit() {
  }

  get currentGuest() {
    return JSON.stringify(this.model);
  }

}
