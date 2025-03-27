import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  email: string = '';
  password: string = '';

  // Credenciais hardcoded
  private readonly validUser = {
    email: 'admin@gmail.com',
    password: '123456',
  };

  constructor(
    private readonly router: Router,
    private readonly alertCtrl: AlertController
  ) {}

  async login() {
    if (
      this.email === this.validUser.email &&
      this.password === this.validUser.password
    ) {
      // Login bem-sucedido
      this.router.navigate(['/home']); // Redireciona para a página inicial
    } else {
      // Exibe um alerta de erro
      const alert = await this.alertCtrl.create({
        header: 'Erro',
        message: 'E-mail ou senha inválidos!',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}
