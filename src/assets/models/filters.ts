export class Filters {
  offerId: string; 
  affiliateId: string; 
  sub1: string; 
  sub2: string; 
  sub3: string; 
  sub4: string; 
  sub5: string; 
  source: string; 
  strict: string;

  constructor() {
    this.offerId = '';
    this.affiliateId = '';
    this.sub1 = '';
    this.sub2 = '';
    this.sub3 = '';
    this.sub4 = '';
    this.sub5 = '';
    this.source = '';
    this.strict = '';
  }
}

export interface FiltersInterace {
  offerId: string; 
  affiliateId: string; 
  sub1: string; 
  sub2: string; 
  sub3: string; 
  sub4: string; 
  sub5: string; 
  source: string; 
  strict: string;
}