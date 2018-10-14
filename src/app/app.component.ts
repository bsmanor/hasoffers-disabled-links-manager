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

  constructor(
    private hoService: HoApiService
  ) {
    this.hoService.getDisabledLinks().subscribe( (res: DisabledLinksResponse) => {
      for (const rule in res.response.data) {
        if (rule) {
          this.disabledLinks.push(res.response.data[rule].OfferDisabledLink);
          console.log(res.response.data[rule].OfferDisabledLink);
        }
      }
    });

  }

  deleteDisabledLink(id) {
    this.hoService.deleteDisabledLink(this.networkId, this.networkToken, id)
    .subscribe(res => {
      console.log(res);
    })
  }

  


}
