import { LoginService } from './../../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private loginService: LoginService, private camera: Camera) { }

  ngOnInit() { }

  tirarFoto() {
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.FILE_URI,
      saveToPhotoAlbum: true,
      correctOrientation: true
    })
      .then(image => {
        // image = normalizeURL(image);
        this.loginService.salvarAvatar(image);
      })
      .catch(error => console.log('Erro ao tirar foto ', error))
  }

  get avatar() {
    return this.loginService.obterAvatar();
  }

  get usuarioLogado() {
    return this.loginService.getUsuarioLogado();
  }

}
