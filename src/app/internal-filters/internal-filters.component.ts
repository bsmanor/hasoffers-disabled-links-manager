import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FiltersInterface, Filters } from 'src/assets/models/filters';

@Component({
  selector: 'app-internal-filters',
  templateUrl: './internal-filters.component.html',
  styleUrls: ['./internal-filters.component.css']
})
export class InternalFiltersComponent implements OnInit {

  @Input() filters: FiltersInterface;
  @Output() filterEmt = new EventEmitter<FiltersInterface>();


  constructor() {}

  filter() {
    this.filterEmt.emit(this.filters);
  }

  toggleFilters() {
    // this.showFilters = !this.showFilters;
  }

  ngOnInit() {
  }

}
