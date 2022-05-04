import { RegistrationDetails } from './../../models/registration-details';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Registration } from 'src/app/models/registration';
import { RegistrationDetailService } from 'src/app/services/registration-details';


@Component({
  selector: 'app-registration-details',
  templateUrl: './registration-details.component.html',
  styleUrls: ['./registration-details.component.css']
})
export class RegistrationDetailsComponent implements OnInit {
  registrationDetails: RegistrationDetails[] = [];
  registrationId: any;
  dynamicScript:any;
  header:any;

  registrationDetail: RegistrationDetails = new RegistrationDetails();


  constructor(private route: ActivatedRoute, private _registrationService: RegistrationDetailService) {
     
   }

  ngOnInit(): void {
    this.registrationId = this.route.snapshot.paramMap.get('id');

    this._registrationService.getRegistrationDetails()
    .subscribe(
      data => {
     
        this.registrationDetail= data[0];
        this.dynamicScript=data[0].link;
       
        this.loadScripts(); 
        // if(this.registrationDetails.length == 0){
        //   this.dynamicScripts="";
        // } else {
        //   this.dynamicScripts=this.registrationDetails.link;
        // }
      }
      
    );
    
  }

  loadScripts() {
    
 const dynamicScripts =[this.dynamicScript];
    for (let i = 0; i <dynamicScripts.length; i++) {
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
