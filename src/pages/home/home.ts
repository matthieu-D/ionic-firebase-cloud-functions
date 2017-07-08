import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  count;

  constructor(public navCtrl: NavController, public http: Http) {
    http.get('https://us-central1-todo-firebase-c4298.cloudfunctions.net/countTasks')
    .subscribe((data) => {
      this.count = data.json().count;
    })
  }
}
