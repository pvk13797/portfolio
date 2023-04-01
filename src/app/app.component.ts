import { Component, HostListener, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'portfolio';
  scrolled: boolean = false;
  year = new Date().getFullYear();

  @ViewChild('home') homeElement: ElementRef | any;
  @ViewChild('about') aboutElement: ElementRef | any;
  @ViewChild('skills') skillsElement: ElementRef | any;
  @ViewChild('education') educationElement: ElementRef | any;
  @ViewChild('experience') experienceElement: ElementRef | any;

  public currentActive = 0;
  public homeOffset: number = 0;
  public aboutOffset: number = 0;
  public skillsOffset: number = 0;
  public educationOffset: number = 0;
  public experienceOffset: number = 0;

  ngAfterViewInit(){
    this.homeOffset = this.homeElement.nativeElement.offsetTop;
    this.aboutOffset = this.aboutElement.nativeElement.offsetTop;
    this.skillsOffset = this.skillsElement.nativeElement.offsetTop;
    this.educationOffset = this.educationElement.nativeElement.offsetTop;
    this.experienceOffset = this.experienceElement.nativeElement.offsetTop;
  }

  scrollToElement(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

  @HostListener('window:scroll', [])
  onWindowScroll(){
    this.scrolled = window.scrollY > 50;

    if (window.pageYOffset >= this.homeOffset && window.pageYOffset < this.aboutOffset) {
      this.currentActive = 1;
    } else if (window.pageYOffset >= this.aboutOffset && window.pageYOffset < this.skillsOffset) {
      this.currentActive = 2;
    } else if (window.pageYOffset >= this.skillsOffset && window.pageYOffset < this.educationOffset) {
      this.currentActive = 3;
    } else if (window.pageYOffset >= this.educationOffset && window.pageYOffset < this.experienceOffset) {
      this.currentActive = 4;
    } else if (window.pageYOffset >= this.experienceOffset) {
      this.currentActive = 5;
    } else {
      this.currentActive = 0;
    }
  }
  
}
