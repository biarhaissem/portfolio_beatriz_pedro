import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iot',
  templateUrl: './iot.component.html',
  styleUrls: ['./iot.component.css']
})
export class IotComponent implements OnInit {

  cardapioItems = [
    {
      title: 'Question Zero',
      // description: 'Pesquisas, Brainstorms, Protótipos de Baixa Fidelidade',
      image: 'assets/images/questionzero.png',
    },
    {
      title: 'Business Model Canvas',
      // description: 'Benchmarking, HTML5, Ferramentas NoCode',
      image: 'assets/images/canvas.png',
    },
    {
      title: 'Stakeholder Map',
      // description: 'HTML, CSS, JavaScript e Bootstrap',
      image: 'assets/images/map.png',
    },
    {
      title: 'Design Thinking',
      // description: 'HTML, CSS, JavaScript, TypeScript, Bootstrap, Angular',
      image: 'assets/images/doublepc.png',
    },
    {
      title: 'Arquitetura',
      // description: 'HTML, CSS, JavaScript, TypeScript, Bootstrap, Angular',
      image: 'assets/images/arqplant.png',
    },
    {
      title: 'Protótipo PLANTECH',
      // description: 'HTML, CSS, JavaScript, TypeScript, Bootstrap, Angular',
      image: 'assets/images/plantcomp.png',
      linkUrl: 'https://youtu.be/7sXbEuw9uZA?si=g5UhvabDLUXc7Xes'
    },
    {
      title: 'App PLANTECH',
      // description: 'HTML, CSS, JavaScript, TypeScript, Bootstrap, Angular',
      image: 'assets/images/plantechmobcapa.png',
      linkUrl: 'https://youtu.be/tknjhV3QkG8?si=EDv7PDu6241joWS3'
    },
    {
      title: 'Cliente & Equipe',
      // description: 'HTML, CSS, JavaScript, TypeScript, Bootstrap, Angular',
      image: 'assets/images/sueliebia.png',
      linkUrl: 'https://youtu.be/Vw1stw0pCN0?si=FnEqjwX4PgzuR6DD'
    },
  ];

  batalhaItems = [
    {
      title: 'Painel 17 ODS',
      // description: 'Pesquisas, Brainstorms, Protótipos de Baixa Fidelidade',
      image: 'assets/images/ODS.png',
    },
    {
      title: 'Cronograma',
      // description: 'Benchmarking, HTML5, Ferramentas NoCode',
      image: 'assets/images/crono.png',
    },
    {
      title: 'Matriz SWOT',
      // description: 'HTML, CSS, JavaScript e Bootstrap',
      image: 'assets/images/swot.png',
    },
    {
      title: 'Metodologia 5W2H',
      // description: 'HTML, CSS, JavaScript, TypeScript, Bootstrap, Angular',
      image: 'assets/images/5w2h.png',
    },
    {
      title: 'Arquitetura',
      // description: 'HTML, CSS, JavaScript, TypeScript, Bootstrap, Angular',
      image: 'assets/images/arqsmart.png',
    },
    {
      title: 'Protótipo Smart Plant',
      // description: 'HTML, CSS, JavaScript, TypeScript, Bootstrap, Angular',
      image: 'assets/images/protcomp.png',
    },
    {
      title: 'App Smart Plant',
      // description: 'HTML, CSS, JavaScript, TypeScript, Bootstrap, Angular',
      image: 'assets/images/smartmobcapa.png',
      linkUrl: 'https://www.youtube.com/shorts/n9omp3_MxsQ'
    },
    {
      title: 'Equipe & Cliente',
      // description: 'HTML, CSS, JavaScript, TypeScript, Bootstrap, Angular',
      image: 'assets/images/equipesmart.png',
      linkUrl: 'https://youtube.com/shorts/IfF88wXci04?si=d77SgJp6GBJhSadd'
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
