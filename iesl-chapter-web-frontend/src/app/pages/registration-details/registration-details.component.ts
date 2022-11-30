import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Registration } from 'src/app/models/registration';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration-details',
  templateUrl: './registration-details.component.html',
  styleUrls: ['./registration-details.component.css']
})
export class RegistrationDetailsComponent implements OnInit {
  submited: boolean = false;
  url="https://docs.google.com/forms/d/e/1FAIpQLSdUc3DeBf3jmWi1F4G8ckY9cQPOEWKHNvRcqbyNs9A77YcyVg/formResponse";
  registrationId: any;

  registrations: Registration[] = [];

  registration: Registration = new Registration();

  constructor(private route: ActivatedRoute, private _registrationService: RegistrationService) {
    this.loadScripts(); 
    
  }

  ngOnInit(): void {
    this.registrationId = this.route.snapshot.paramMap.get('id');;

    this._registrationService.getRegistrations()
      .subscribe(
        data => {
          this.registration = data.filter(item => item._id == this.registrationId)[0];
        }
      );
  }
  loadScripts() {
    const dynamicScripts = ['https://formfacade.com/include/108200150840179518720/form/1FAIpQLSdUc3DeBf3jmWi1F4G8ckY9cQPOEWKHNvRcqbyNs9A77YcyVg/classic.js?div=ff-compose'];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async =true;
      node.defer=true;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

}
