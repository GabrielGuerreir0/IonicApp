import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ionic',
  templateUrl: './ionic.page.html',
  styleUrls: ['./ionic.page.scss'],
  standalone: false,
})
export class IonicPage implements OnInit {
  constructor(private NavController: NavController) {}

  ngOnInit() {}
  navList() {
    this.NavController.navigateForward('/home');
  }
  navMap() {
    this.NavController.navigateForward('/map');
  }
}
