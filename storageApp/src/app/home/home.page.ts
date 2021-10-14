import { Usuario } from './../models/Usuario';
import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listaUsuarios: Usuario[] = [];
  usuario: Usuario = new Usuario();
  constructor(private storageService: StorageService) {}

  async buscarUsuarios() {
    this.listaUsuarios = await this.storageService.getAll();
  }

  async excluirCadastro(email: string) {
    await this.storageService.remove(email);
    this.buscarUsuarios();
  }

  async exibirCadastro(email: string) {
    this.usuario = await this.storageService.get(email);
    alert('Nome:' + this.usuario.nome + '\n Email:' + this.usuario.email + '\n Telefone:' + this.usuario.telefone +
    '\nEndereço:' + this.usuario.endereco );
  }

  ionViewDidEnter(){
      this.buscarUsuarios();
  }
}
