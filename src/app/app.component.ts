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

  // networkId = 'manor';
  // networkToken = 'NETIlDlNCCAsW39apdfi33CrecceQR';
  networkId = 'wmadv';
  networkToken = 'NET80o5jnM9Yn8hSSO5jYfX4eZnzvS';
  totalCount = null;
  primaryFilter = {
    open: false,
    offer: '',
    affiliate: '',
    source: ''
  };

  disabledLinks: OfferDisabledLink[] = [];
  showFilters = false;
  filters = {
    offerId: '',
    affiliateId: '',
    sub1: '',
    sub2: '',
    sub3: '',
    sub4: '',
    sub5: '',
    source: '',
    strict: ''
  };


  constructor(private hoService: HoApiService) {
    this.hoService.getTotalCount(this.networkId, this.networkToken).subscribe( (res: DisabledLinksResponse) => {
      this.totalCount = res.response.data.count;
      if (res.response.data.count > 300) {
        this.primaryFilter.open = true;
      } else {
        this.getDisabledLinks(1);
      }
    });
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  togglePrimaryFilter() {
    if (this.primaryFilter.open) {
      this.primaryFilter.open = !this.primaryFilter.open;
      this.getDisabledLinks(1);
    } else {
      this.primaryFilter.open = !this.primaryFilter.open;
    }
  }

  getDisabledLinks(pageNum) {
    this.hoService.getDisabledLinks(this.networkId, this.networkToken, 1, this.primaryFilter.offer, this.primaryFilter.affiliate, this.primaryFilter.source)
    .subscribe( (res: DisabledLinksResponse) => {
      this.disabledLinks = Object.values(res.response.data.data).map( (rule) => rule['OfferDisabledLink']);
      console.log(this.disabledLinks);
    });
  }

  deleteDisabledLink(id) {
    this.hoService.deleteDisabledLink(this.networkId, this.networkToken, id)
    .subscribe(res => {
      console.log(res);
      this.getDisabledLinks(1);
    });
  }


}
