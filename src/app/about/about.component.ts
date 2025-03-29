import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ProdetailsComponent } from '../prodetails/prodetails.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {


  @ViewChild('skillsSection', { static: false }) skillsSection!: ElementRef;

  skills = [
    { name: 'HTML & CSS', value: 90, bg: 'bg-success', width: '0%' },
    { name: 'Angular', value: 85, bg: 'bg-info', width: '0%' },
    { name: 'Core Java', value: 80, bg: 'bg-warning', width: '0%' },
    { name: 'My SQL', value: 75, bg: 'bg-primary', width: '0%' },
    { name: 'Bootstrap', value: 95, bg: 'bg-danger', width: '0%' },
    { name: 'SEO', value: 90, bg: 'bg-success', width: '0%' }
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.animateProgressBars();
        observer.disconnect(); // Stop observing after animation
      }
    }, { threshold: 0.5 });

    observer.observe(this.skillsSection.nativeElement);
  }

  animateProgressBars() {
    this.skills.forEach((skill, index) => {
      setTimeout(() => {
        skill.width = `${skill.value}%`;
      }, index * 300); // Delay for staggered effect
    });
  }
}