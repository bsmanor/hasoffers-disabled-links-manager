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

  expand = false; // whether the filters expender is expended (opened) or not (closed)


  constructor() {}

  filter() {
    this.filterEmt.emit(this.filters);
    this.expand = false;
  }



  toggleExpantion() {
    this.expand !== this.expand;
  }

  ngOnInit() {
  }

}
