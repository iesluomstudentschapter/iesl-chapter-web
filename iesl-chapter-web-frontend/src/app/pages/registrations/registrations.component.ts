import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registration } from 'src/app/models/registration';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.css']
})
export class RegistrationsComponent implements OnInit {

  registrations : Registration[] = [];

  constructor(private router: Router, private _registrationService: RegistrationService) { }

  ngOnInit(): void {
    this._registrationService.getRegistrations()
      .subscribe(
        data => {
          console.log(data);
          this.registrations = data;
        }
      );
  }

  onSelect(registration: any){
    this.router.navigate(['registrations', registration._id]);
  }

}
