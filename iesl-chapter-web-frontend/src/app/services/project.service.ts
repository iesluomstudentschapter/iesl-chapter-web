import { Injectable } from '@angular/core';

@Injectable({ 
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects(){
    return [
      {
        "id": 1,
        "name": "Project A",
        "brief": "ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD",
        "description": "efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh",
        "images": ["assets/img/team-1.jpg", "assets/img/team-2.jpg"]
      },
      {
        "id": 2,
        "name": "Project B",
        "brief": "ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD",
        "description": "efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh",
        "images": ["assets/img/team-1.jpg", "assets/img/team-2.jpg"]
      }, 
      {
        "id": 3,
        "name": "Project C",
        "brief": "ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD",
        "description": "efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh",
        "images": ["assets/img/team-1.jpg", "assets/img/team-2.jpg"]
      }, 
      {
        "id": 4,
        "name": "Project D",
        "brief": "ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD",
        "description": "efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh efgh",
        "images": ["assets/img/team-1.jpg", "assets/img/team-2.jpg"]
      },
    ];
  }
}
