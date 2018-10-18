import { FiltersInterface } from './../../assets/models/filters';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HoApiService } from '../../assets/services/ho-api.service';
import { DisabledLinksResponse } from '../../assets/models/getDisabledLinksResponse';
import { OfferDisabledLink } from '../../assets/models/getDisabledLinksResponse';
import { Filters } from '../../assets/models/filters';

@Component({
  selector: 'app-primary-filter',
  templateUrl: './primary-filter.component.html',
  styleUrls: ['./primary-filter.component.css']
})
export class PrimaryFilterComponent implements OnInit {

  @Input() totalCount: number;
  @Output() filtersEmt = new EventEmitter<FiltersInterface>();

  filters = {
    id: null,
    offer_id: null,
    affiliate_id: null,
    aff_info1: null,
    aff_info2: null,
    aff_info3: null,
    aff_info4: null,
    aff_info5: null,
    source: null,
    strict: null,
  };

  showAdditionalFilters = false;

  constructor(private hoService: HoApiService) {}


  toggleAdditionalFilters() {
    this.showAdditionalFilters = !this.showAdditionalFilters;
  }

  rulesCount() {
    this.hoService.getTotalCount(this.filters)
    .subscribe((res: DisabledLinksResponse) => {
      this.totalCount = res.response.data.count;
      console.log(this.totalCount);
      if (this.totalCount < 300) {
        this.filtersEmt.emit(this.filters);
      }
    });

  }

  ngOnInit() {
  }

}
