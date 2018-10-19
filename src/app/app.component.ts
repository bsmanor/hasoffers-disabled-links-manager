import { FiltersInterface } from './../assets/models/filters';
import { Component, Input } from '@angular/core';
import { HoApiService } from '../assets/services/ho-api.service';
import { DisabledLinksResponse } from '../assets/models/getDisabledLinksResponse';
import { OfferDisabledLink } from '../assets/models/getDisabledLinksResponse';
import { Observable } from 'rxjs';
import {PageEvent} from '@angular/material';
import { LimitCharactersPipe } from './pipes/limit-characters.pipe';
import { Filters } from 'src/assets/models/filters';

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
  isValidated = false;
  totalCount = null;
  filters: FiltersInterface;
  primaryFilter = {
    minCount: 100, // Minimum rules in network that require primary filtering
    open: false,
    offer: '',
    affiliate: '',
    source: ''
  };

  disabledLinks: OfferDisabledLink[] = []; // Array containing all network's disabled link rules
  headers = ['rule_id', 'offer_id', 'affiliate_id', 'affiliate_sub_id1','affiliate_sub_id2', 'affiliate_sub_id3', 'affiliate_sub_id4', 'affiliate_sub_id5','source','strict','delete']
  // MatPaginator Inputs
  pageSize = 10;
  pageSizeOptions: number[] = [10, 20, 50];
  pageIndex = 0;
  // MatPaginator Output
  pageEvent: PageEvent;

  strTest = 'e6d3935e6bdf491fbbed917053d6508e';

  constructor(private hoService: HoApiService) {
    this.primaryFilter.open = false;
  }
 
  onValidation(brand) {
    this.isValidated = true;
    this.isPrimaryFiltersNeeded();
  }
  
  isPrimaryFiltersNeeded() {
    this.hoService.getTotalCount().subscribe( (res: DisabledLinksResponse) => {
      this.totalCount = res.response.data.count;
      if (this.totalCount > this.primaryFilter.minCount) {
        this.primaryFilter.open = true;
      } else {
        this.primaryFilter.open = false;
        this.hoService.getDisabledLinks();
      }
    });
  }

  onFiltersReceived(filters) {
    this.filters = filters;
    this.primaryFilter.open = false;
    this.getDisabledLinks(filters)
  }

  onInternalFilter(filters: FiltersInterface) {
    this.filters = filters;
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
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.getDisabledLinks(this.filters);
  }

  getDisabledLinks(filters?) {
    this.hoService.getDisabledLinks(this.pageSize, this.pageIndex + 1, filters)
    .subscribe( (res: DisabledLinksResponse) => {
      this.totalCount = res.response.data.count;
      this.disabledLinks = Object.values(res.response.data.data).map( (rule) => rule['OfferDisabledLink']);
    });
  }

  deleteDisabledLink(id) {
    this.hoService.deleteDisabledLink(id)
    .subscribe(res => {
      this.getDisabledLinks();
    });
  }


}
