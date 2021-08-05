import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects : any[] = [];

  constructor(private router: Router, private _projectService: ProjectService) { }

  ngOnInit(): void {
    this.projects = this._projectService.getProjects();
  }

  onSelect(project: any){
    this.router.navigate(['projects', project.id]);
  }

}
