import { Component } from '@angular/core';
import { HoApiService } from '../assets/services/ho-api.service';
import { DisabledLinksResponse } from '../assets/models/getDisabledLinksResponse';
import { OfferDisabledLink } from '../assets/models/getDisabledLinksResponse';
import { Observable } from 'rxjs';
import {PageEvent} from '@angular/material';
import { LimitCharactersPipe } from './pipes/limit-characters.pipe';

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

  disabledLinks: OfferDisabledLink[] = []; // Array containing all network's disabled link rules
  showFilters = false;
  filters = {offerId: '', affiliateId: '', sub1: '', sub2: '', sub3: '', sub4: '', sub5: '', source: '', strict: ''};
  // MatPaginator Inputs
  pageSize = 10;
  pageSizeOptions: number[] = [10, 25, 50];
  pageIndex = 0;
  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private hoService: HoApiService) {
    this.primaryFilter.open = false;
    this.hoService.getTotalCount(this.networkId, this.networkToken).subscribe( (res: DisabledLinksResponse) => {
      this.totalCount = res.response.data.count;
      if (res.response.data.count > 300) {
        this.primaryFilter.open = true;
      } else {
        this.getDisabledLinks();
      }
    });
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  togglePrimaryFilter() {
    if (this.primaryFilter.open) {
      this.primaryFilter.open = !this.primaryFilter.open;
      this.getDisabledLinks();
    } else {
      this.primaryFilter.open = !this.primaryFilter.open;
    }
  }


  handlePaginationChange(event: PageEvent) {
    console.log(event);
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.getDisabledLinks();
  }

  getDisabledLinks() {
    this.hoService.getDisabledLinks(this.networkId, this.networkToken, this.pageSize, this.pageIndex + 1, this.primaryFilter.offer, this.primaryFilter.affiliate, this.primaryFilter.source)
    .subscribe( (res: DisabledLinksResponse) => {
      this.totalCount = res.response.data.count;
      this.disabledLinks = Object.values(res.response.data.data).map( (rule) => rule['OfferDisabledLink']);
      console.log(this.disabledLinks);
    });
  }

  deleteDisabledLink(id) {
    this.hoService.deleteDisabledLink(this.networkId, this.networkToken, id)
    .subscribe(res => {
      console.log(res);
      this.getDisabledLinks();
    });
  }


}
