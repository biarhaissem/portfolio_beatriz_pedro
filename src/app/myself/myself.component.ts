import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myself',
  templateUrl: './myself.component.html',
  styleUrls: ['./myself.component.css']
})
export class MyselfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cardapioItems = [
    {
      title: 'CONCEPTIONS',
      // description: '5 Planos de Garrett, 10 Heurísticas de Nielsen, Honeycomb, Gestalt.',
      image: 'assets/images/Conceptions.png'
    },
    {
      title: 'WEB DESIGN',
      // description: 'HTML, CSS, JavaScript, TypeScript, Boostrap, PHP, Angular, Laravel.',
      image: 'assets/images/cup4fotos.png'
    },
    {
      title: 'MOBILE DESIGN',
      // description: 'UX Research, UX Writing, Figma, Prototipação, Expo, React Native.',
      image: 'assets/images/cupmob.png'
    },
    {
      title: 'PROGRAMMING',
      // description: 'Python, C, Robotica, Arduino, ESP8266, ESP32, MySQL, PostgreSQL.',
      image: 'assets/images/prog.png'
    },
  ];

    showModal = false;
    selectedImage: string | null = null;

    expandImage(image: string) {
      this.selectedImage = image;
      this.showModal = true;
    }

    closeModal() {
      this.showModal = false;
      this.selectedImage = null;
    }
  }





