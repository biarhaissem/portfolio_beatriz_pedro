import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trampo';
  @ViewChild('navbarMenu') navbarMenu!: ElementRef;

  constructor(private renderer: Renderer2) {}

  closeMenu() {
    // Fecha o menu removendo a classe 'show'
    this.renderer.removeClass(this.navbarMenu.nativeElement, 'show');
  }
}




