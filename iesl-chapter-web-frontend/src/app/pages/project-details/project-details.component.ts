import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  public projectId: any;

  project: Project = new Project();

  constructor(private route: ActivatedRoute, private _projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('id');;

    this.project = this._projectService.getProjects().filter(
      item => item.id == this.projectId 
    )[0];

    console.log(this.project.images);
  }

}
