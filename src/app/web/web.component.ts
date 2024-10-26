import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {

  cardapioItems = [
    {
      title: 'Wireframe',
      // description: 'Pesquisas, Brainstorms, Protótipos de Baixa Fidelidade',
      image: 'assets/images/2.png',
    },
    {
      title: 'Website Wix',
      // description: 'Benchmarking, HTML5, Ferramentas NoCode',
      image: 'assets/images/cup1.png',
      linkUrl: 'https://biarhaissem.wixsite.com/cupcakepop'
    },
    {
      title: 'Website Bootstrap',
      // description: 'HTML, CSS, JavaScript e Bootstrap',
      image: 'assets/images/cup2.png',
      linkUrl: 'https://leeticiaalves6.github.io/projeto-dev-web/home.html'
    },
    {
      title: 'Website Angular',
      // description: 'HTML, CSS, JavaScript, TypeScript, Bootstrap, Angular',
      image: 'assets/images/cup3.png',
      linkUrl: 'https://biarhaissem.github.io/cupcakepop_2024/home'
    },
    {
      title: 'Front-end & Back-end',
      // description: 'HTML, CSS, JavaScript, TypeScript, Bootstrap, Angular',
      image: 'assets/images/frontback.png',
      linkUrl: 'https://github.com/biarhaissem/Cupcakepop_Frontend'
    },
    {
      title: 'Equipe Desenvolvedora',
      // description: 'HTML, CSS, JavaScript, TypeScript, Bootstrap, Angular',
      image: 'assets/images/equipecup.png',
    },
  ];

  showModal = false;
  selectedImage: string | null = null;
  selectedLink: string | null = null;

  constructor() { }

  ngOnInit(): void {}


  openExternalLink() {
    if (this.selectedLink) {
      window.open(this.selectedLink, '_blank'); // Abre o link em uma nova aba
    }
  }

  expandImage(image: string, link?: string) {
    this.selectedImage = image;
    this.selectedLink = link || null; // Se o link existir, será passado, caso contrário, fica null.
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedImage = null;
    this.selectedLink = null;
  }

}

