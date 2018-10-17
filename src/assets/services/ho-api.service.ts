import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter } from 'rxjs/operators';
import { DisabledLinksResponse } from '../models/getDisabledLinksResponse';
import { Observable } from 'rxjs';
import { FiltersInterace } from './../models/filters';

@Injectable({
  providedIn: 'root'
})
export class HoApiService {

  // networkId = 'manor';
  // networkToken = 'NETIlDlNCCAsW39apdfi33CrecceQR';
  networkId = 'wmadv';
  networkToken = 'NET80o5jnM9Yn8hSSO5jYfX4eZnzvS';

  constructor(private http: HttpClient) { }

  getTotalCount(filters?: FiltersInterace) {
    const limit = 1;
    let totalCount: number;
    return this.http.get(
      `https://${this.networkId}.api.hasoffers.com/Apiv3/json?
      NetworkToken=${this.networkToken}&
      Target=OfferDisabledLink&
      Method=findAll&
      fields[]=id&
      limit=${limit}&page=1`);
  }

  getDisabledLinks(limit = 25, page = 1, offer?, affiliate?, source?) {
    let offerFilter = '';
    let affiliateFilter = '';
    let sourceFilter = '';
    if (offer > 1) { offerFilter = `filters[offer_id]=${offer}&`; }
    if (affiliate > 1) { affiliateFilter = `filters[affiliate_id]=${affiliate}&`; }
    if (source > 1) { sourceFilter = `filters[source]=${source}&`; }
    console.log(`https://${this.networkId}.api.hasoffers.com/Apiv3/json?
    NetworkToken=${this.networkToken}&
    Target=OfferDisabledLink&
    Method=findAll&
    fields[]=strict&
    fields[]=source&
    fields[]=offer_id&
    fields[]=id&
    fields[]=datetime&
    fields[]=created_by&
    fields[]=affiliate_id&
    fields[]=aff_info5&
    fields[]=aff_info4&
    fields[]=aff_info3&
    fields[]=aff_info2&
    fields[]=aff_info1&
    ${offerFilter}${affiliateFilter}${sourceFilter}
    limit=${limit}&page=${page}`);
    return this.http.get(
      `https://${this.networkId}.api.hasoffers.com/Apiv3/json?
      NetworkToken=${this.networkToken}&
      Target=OfferDisabledLink&
      Method=findAll&
      fields[]=strict&
      fields[]=source&
      fields[]=offer_id&
      fields[]=id&
      fields[]=datetime&
      fields[]=created_by&
      fields[]=affiliate_id&
      fields[]=aff_info5&
      fields[]=aff_info4&
      fields[]=aff_info3&
      fields[]=aff_info2&
      fields[]=aff_info1&
      ${offerFilter}${affiliateFilter}${sourceFilter}
      limit=${limit}&page=${page}`);
  }

  deleteDisabledLink(id) {
    return this.http.get(
      `https://${this.networkId}.api.hasoffers.com/Apiv3/json?
      NetworkToken=${this.networkToken}&
      Target=OfferDisabledLink&
      Method=delete&
      id=${id}`);
  }


}
