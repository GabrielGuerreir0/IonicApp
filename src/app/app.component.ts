import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private readonly navCTRL: NavController) {
    this.initializeApp();
  }
  initializeApp() {
    this.navCTRL.navigateRoot('/login');
  }
}
