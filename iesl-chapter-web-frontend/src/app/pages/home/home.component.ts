import { Component, OnInit } from '@angular/core';
import { Update } from 'src/app/models/update';
import { UpdateService } from 'src/app/services/update.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  updates: Update[] = [];
  noUpdates: boolean = true;
  
  constructor(private _updateService: UpdateService) { }

  ngOnInit(): void {
    this._updateService.getRegistrations()
      .subscribe(
        data => {
          this.updates = data;

          if(this.updates.length == 0){
            this.noUpdates = true;
          } else {
            this.noUpdates = false;
          }
        }
      );
  }

}
