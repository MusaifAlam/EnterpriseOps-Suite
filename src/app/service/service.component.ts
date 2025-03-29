import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {

  services = [
    { title: 'Web Development', description: 'Building responsive and modern web applications.', icon: 'bi-globe' },
    { title: 'Angular Development', description: 'Creating dynamic frontend applications with Angular.', icon: 'bi-layers' },
    { title: 'Java Backend', description: 'Developing secure and scalable backend solutions.', icon: 'bi-code-slash' },
    { title: 'Database Management', description: 'Handling structured and optimized database.', icon: 'bi-database' },
    { title: 'UI/UX Design', description: 'Designing intuitive and user-friendly interfaces.', icon: 'bi-brush' },
    { title: 'SEO Optimization', description: 'Improving search engine rankings for better visibility.',icon: 'bi-graph-up'}
  ];

}
