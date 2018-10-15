import { Component } from '@angular/core';
import { HoApiService } from '../assets/services/ho-api.service';
import { DisabledLinksResponse } from '../assets/models/getDisabledLinksResponse';
import { OfferDisabledLink } from '../assets/models/getDisabledLinksResponse';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  networkId = 'manor';
  networkToken = 'NETIlDlNCCAsW39apdfi33CrecceQR';
  disabledLinks: OfferDisabledLink[] = [];
  rules: Observable<Object>;
  test: any;

  constructor(
    private hoService: HoApiService
  ) {
    this.getDisabledLinks();
  }

  getDisabledLinks() {
    this.hoService.getDisabledLinks(this.networkId, this.networkToken).subscribe( (res: DisabledLinksResponse) => {
      this.disabledLinks = Object.values(res.response.data).map( (rule) => rule['OfferDisabledLink']);
      console.log(this.disabledLinks);      
    });
  }

  deleteDisabledLink(id) {
    this.hoService.deleteDisabledLink(this.networkId, this.networkToken, id)
    .subscribe(res => {
      console.log(res);
      this.getDisabledLinks();
    })
  }


}
