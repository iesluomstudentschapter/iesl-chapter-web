import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Registration } from 'src/app/models/registration';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration-details',
  templateUrl: './registration-details.component.html',
  styleUrls: ['./registration-details.component.css']
})
export class RegistrationDetailsComponent implements OnInit {

  registrationId: any;

  registrations: Registration[] = [];

  registration: Registration = new Registration();

  constructor(private route: ActivatedRoute, private _registrationService: RegistrationService) { }

  ngOnInit(): void {
    this.registrationId = this.route.snapshot.paramMap.get('id');;

    this._registrationService.getRegistrations()
      .subscribe(
        data => {
          this.registration = data.filter(item => item._id == this.registrationId)[0];
        }
      );
  }

}
