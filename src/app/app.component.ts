import { FiltersInterface } from './../assets/models/filters';
import { Component, Input } from '@angular/core';
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
  globalFilters: FiltersInterface;
  primaryFilter = {
    minCount: 15, // Minimum rules in network that require primary filtering
    open: false,
    offer: '',
    affiliate: '',
    source: ''
  };

  disabledLinks: OfferDisabledLink[] = []; // Array containing all network's disabled link rules
  showFilters = false;
  filters = {id: '', offerId: '', affiliateId: '', sub1: '', sub2: '', sub3: '', sub4: '', sub5: '', source: '', strict: ''};
  // MatPaginator Inputs
  pageSize = 10;
  pageSizeOptions: number[] = [10, 25, 50];
  pageIndex = 0;
  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private hoService: HoApiService) {
    this.primaryFilter.open = false;
    this.isPrimaryFiltersNeeded();
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  isPrimaryFiltersNeeded() {
    this.hoService.getTotalCount().subscribe( (res: DisabledLinksResponse) => {
      this.totalCount = res.response.data.count;
      if (this.totalCount > this.primaryFilter.minCount) {
        console.log(this.totalCount);
        this.primaryFilter.open = true;
      } else {
        console.log(this.totalCount);
        this.primaryFilter.open = false;
        this.hoService.getDisabledLinks();
      }
    });
  }

  onFiltersReceived(filters) {
    this.globalFilters = filters;
    this.primaryFilter.open = false;
    this.getDisabledLinks(filters)
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
    this.getDisabledLinks(this.globalFilters);
  }

  getDisabledLinks(filters?) {
    this.hoService.getDisabledLinks(this.pageSize, this.pageIndex + 1, filters)
    .subscribe( (res: DisabledLinksResponse) => {
      this.totalCount = res.response.data.count;
      this.disabledLinks = Object.values(res.response.data.data).map( (rule) => rule['OfferDisabledLink']);
      console.log(this.disabledLinks);
    });
  }

  deleteDisabledLink(id) {
    this.hoService.deleteDisabledLink(id)
    .subscribe(res => {
      console.log(res);
      this.getDisabledLinks();
    });
  }


}
