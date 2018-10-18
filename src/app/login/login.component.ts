import { HoApiService } from './../../assets/services/ho-api.service';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() verified

  constructor(private hoApiService: HoApiService) { }

  async validateNetorkCreds(networkId, networkToken) {
     this.hoApiService.validateNetorkCreds(networkId, networkToken)
  }

  ngOnInit() {
  }

}
