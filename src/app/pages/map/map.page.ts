import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
  standalone: false,
})
export class MapPage {
  map: any;
  userMarker: any;

  constructor(private NavController: NavController) {}

  async getCurrentLocation() {
    try {
      // Obtém a localização atual
      const coordinates = await Geolocation.getCurrentPosition();
      const lat = coordinates.coords.latitude;
      const lon = coordinates.coords.longitude;

      console.log('Latitude:', lat);
      console.log('Longitude:', lon);

      // Inicializa o mapa
      this.initializeMap(lat, lon);
    } catch (error) {
      console.error('Erro ao obter localização:', error);
    }
  }

  initializeMap(lat: number, lon: number) {
    // Cria o mapa e define a visualização inicial
    this.map = L.map('map').setView([lat, lon], 13);

    // Camada leve de tiles para carregamento rápido
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
      tileSize: 256,
    }).addTo(this.map);

    // Adiciona o marcador para a localização atual do usuário
    this.userMarker = L.marker([lat, lon])
      .addTo(this.map)
      .bindPopup('Você está aqui!')
      .openPopup();
  }

  showNearbyPlaces() {
    console.log('Mostrar locais próximos...');
    // Lógica para mostrar lugares próximos
  }

  navList() {
    this.NavController.navigateForward('/home');
  }

  navIonic() {
    this.NavController.navigateForward('/ionic');
  }
}
