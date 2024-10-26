import { Component, OnInit } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedImage: string | null = null;  // Imagem atualmente selecionada
  showModal: boolean = false;  // Controla a exibição do modal
  currentImage: string | null = null;

  // Método para abrir o modal
  openModal(image: string): void {
    this.selectedImage = image;
    this.currentImage = image;
    this.showModal = true;
  }

  // Método para fechar o modal
  closeModal(): void {
    this.showModal = false;
    this.selectedImage = null;
    this.currentImage = null;
    console.log('Modal fechado');
  }
}
