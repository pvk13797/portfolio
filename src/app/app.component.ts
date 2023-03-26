import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  scrolled: boolean = false;
  year = new Date().getFullYear();

  @HostListener('window:scroll', [])
  onWindowScroll(){
    this.scrolled = window.scrollY > 50;
  }
}
