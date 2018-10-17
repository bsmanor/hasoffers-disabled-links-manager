import { Component, OnInit, Input } from '@angular/core';
import { HoApiService } from '../../assets/services/ho-api.service';
import { DisabledLinksResponse } from '../../assets/models/getDisabledLinksResponse';
import { OfferDisabledLink } from '../../assets/models/getDisabledLinksResponse';

@Component({
  selector: 'app-primary-filter',
  templateUrl: './primary-filter.component.html',
  styleUrls: ['./primary-filter.component.css']
})
export class PrimaryFilterComponent implements OnInit {

  @Input() totalCount: number;

  constructor(private hoService: HoApiService) { }

  primaryFilter = {
    open: false,
    offer: '',
    affiliate: '',
    source: ''
  };
  

  rulesCount() {
    this.totalCount = this.hoService.getTotalCount(); // Add filters functionality. // Create a Filters object which will be passed to the hoService.

  }
    
  ngOnInit() {
  }

}
