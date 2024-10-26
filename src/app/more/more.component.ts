import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cardapioItems = [
    {
      title: 'PLANTECH',
      // description: '5 Planos de Garrett, 10 Heurísticas de Nielsen, Honeycomb, Gestalt.',
      image: 'assets/images/plantechbom.png',
      linkUrl: 'https://drive.google.com/drive/folders/1BHsslyj0UiLBW9YAHv4uFV9VpkCUvfo-?usp=sharing'
    },
    {
      title: 'Smart Plant',
      // description: 'HTML, CSS, JavaScript, TypeScript, Boostrap, PHP, Angular, Laravel.',
      image: 'assets/images/smartbom.png',
      linkUrl: 'https://drive.google.com/drive/folders/16ACpcyTATzHGxs2gUc9plcmEOfu_q6x6?usp=sharing'
    },
    {
      title: 'Cantina Reis App',
      // description: 'UX Research, UX Writing, Figma, Prototipação, Expo, React Native.',
      image: 'assets/images/bannerbom.png',
      linkUrl: 'https://youtu.be/28ajG7aFZe8?si=dra3t4_ykrOGU5WD'
    },
    {
      title: 'Curriculum Vitae',
      // description: 'Python, C, Robotica, Arduino, ESP8266, ESP32, MySQL, PostgreSQL.',
      image: 'assets/images/logonovo2.png',
      linkUrl: 'https://drive.google.com/file/d/16eZh2X92zx-gRS3E9fKn3dj1RdXrdCob/view?usp=sharing'
    },
  ];

  showModal = false;
  selectedImage: string | null = null;
  selectedLink: string | null = null;

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
