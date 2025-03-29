import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prodetails',
  templateUrl: './prodetails.component.html',
  styleUrls: ['./prodetails.component.css']
})
export class ProdetailsComponent implements OnInit {
  projectId: number = 0;
  projectName: string = '';

  projects = [
    { id: 1, name: 'Project A' },
    { id: 2, name: 'Project B' },
    { id: 3, name: 'Project C' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.projectId = Number(this.route.snapshot.paramMap.get('id'));
    const project = this.projects.find(p => p.id === this.projectId);
    if (project) {
      this.projectName = project.name;
    }
  }
}
