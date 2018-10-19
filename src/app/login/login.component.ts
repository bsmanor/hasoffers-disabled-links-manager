import { HoApiService } from './../../assets/services/ho-api.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BrandInformation, Brand } from 'src/assets/models/brandInformation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() validated = new EventEmitter<Brand>();

  title = `Login`;
  subtitle: string;

  constructor(private hoApiService: HoApiService) { }

  validateNetorkCreds(networkId, networkToken) {
     this.hoApiService.validateNetorkCreds(networkId, networkToken)
     .subscribe( (res: BrandInformation) => {
        if (res.response.status === 1) {
          console.log('verified!');
          this.validated.emit(res.response.data.Brand)
        } else {
          this.title = `Oops!`;
          this.subtitle = `One of the details you entered isn't correct.`
        }
       console.log();
     })
  }

  ngOnInit() {
  }

}
