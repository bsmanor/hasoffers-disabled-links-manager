export class Filters {
  filters = {
    id: '',
    offer_id: '',
    affiliate_id: '',
    aff_info1: '',
    aff_info2: '',
    aff_info3: '',
    aff_info4: '',
    aff_info5: '',
    source: '',
    strict: ''
  };

  filtersQueryString = '';

  constructor(filters: FiltersInterface) {
    if (filters) {
      for (const filter in this.filters) {
        if (filters[filter]) {
          this.filters[filter] = filters[filter];
        }
      }
    }

    for (const filter in this.filters) {
      if (this.filters[filter].length > 0) {
        this.filtersQueryString += (`filters[${filter}]=${this.filters[filter]}&`);
      }
    }
    console.log(this.filtersQueryString);
  }
}

export interface FiltersInterface {
  id?: string;
  offer_id?: string;
  affiliate_id?: string;
  aff_info1?: string;
  aff_info2?: string;
  aff_info3?: string;
  aff_info4?: string;
  aff_info5?: string;
  source?: string;
  strict?: string;
}
