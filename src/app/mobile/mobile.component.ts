import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  cardapioItems = [
    {
      title: 'UX Research',
      // description: 'Pesquisas, Brainstorms, Protótipos de Baixa Fidelidade',
      image: 'assets/images/reuniao.png',
    },
    {
      title: 'Wireframe',
      // description: 'Benchmarking, HTML5, Ferramentas NoCode',
      image: 'assets/images/wirereis.png',
    },
    {
      title: 'Fluxo do Usuário',
      // description: 'HTML, CSS, JavaScript e Bootstrap',
      image: 'assets/images/fluxo.png',
      linkUrl: 'https://youtu.be/gSkR6ZjnTps?si=cq-6gNfQ-XfHjK4j'
    },
    {
      title: 'Protótipo',
      // description: 'HTML, CSS, JavaScript, TypeScript, Bootstrap, Angular',
      image: 'assets/images/protpreto.png',
      linkUrl: 'https://www.figma.com/design/xy1G35TGLBCTsDogxuH4zp/Cantina-Reis---Template-Android-Nervoso?node-id=16-1479&t=4kwUtTK6gAb9Rvi9-1'
    },
    {
      title: 'Aplicativo',
      // description: 'HTML, CSS, JavaScript, TypeScript, Bootstrap, Angular',
      image: 'assets/images/cantinascreens.png',
      linkUrl: 'https://youtu.be/vPbIg5x65xM'
    },
    {
      title: 'Cliente & Equipe',
      // description: 'HTML, CSS, JavaScript, TypeScript, Bootstrap, Angular',
      image: 'assets/images/equipereis.png',
      linkUrl: 'https://www.instagram.com/projeto_cantina_reis/'
    },
  ];

  batalhaItems = [
    {
      title: 'Etapa 1',
      // description: 'Pesquisas, Brainstorms, Protótipos de Baixa Fidelidade',
      image: 'assets/images/Etapa 1.png',
      linkUrl: 'https://www.figma.com/design/GM71wVzdXkdqYN74CuEncn/Etapa-1---Beatriz?node-id=1-55&t=tEDrTTEYkMQOHAPO-1'
    },
    {
      title: 'Etapa 2',
      // description: 'Benchmarking, HTML5, Ferramentas NoCode',
      image: 'assets/images/Etapa 2.png',
      linkUrl: 'https://www.figma.com/design/DAi3M77m5lyTUEUxLR7clh/Etapa-2?node-id=11-2&t=RcVzfIcOp9J9Yz8p-1'
    },
    {
      title: 'Etapa 3',
      // description: 'HTML, CSS, JavaScript e Bootstrap',
      image: 'assets/images/batbonito.png',
      linkUrl: 'https://www.figma.com/design/bJx86jtU9jo6HD830Un4Us/Batalha-dos-Pets---Beatriz-Helena-Pedro-(Copy)?node-id=0-1&t=dX3r2Tq5ZvkA9WJE-1'
    }
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
