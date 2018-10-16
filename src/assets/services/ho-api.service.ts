import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter } from 'rxjs/operators';
import { DisabledLinksResponse } from '../models/getDisabledLinksResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoApiService {

  networkId = 'manor';
  networkToken = 'NETIlDlNCCAsW39apdfi33CrecceQR';

  constructor(private http: HttpClient) { }

  getTotalCount(netId, netToken) {
    const limit = 1;
    return this.http.get(
      `https://${netId}.api.hasoffers.com/Apiv3/json?
      NetworkToken=${netToken}&
      Target=OfferDisabledLink&
      Method=findAll&
      fields[]=id&
      limit=${limit}&page=1`);
  }

  getDisabledLinks(netId, netToken, limit, page, offer?, affiliate?, source?) {
    let offerFilter = '';
    let affiliateFilter = '';
    let sourceFilter = '';
    if (offer > 1) { offerFilter = `filters[offer_id]=${offer}&`; }
    if (affiliate > 1) { affiliateFilter = `filters[affiliate_id]=${affiliate}&`; }
    if (source > 1) { sourceFilter = `filters[source]=${source}&`; }
    console.log(`https://${netId}.api.hasoffers.com/Apiv3/json?
    NetworkToken=${netToken}&
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
      `https://${netId}.api.hasoffers.com/Apiv3/json?
      NetworkToken=${netToken}&
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

  deleteDisabledLink(netId, netToken, id) {
    return this.http.get(
      `https://${netId}.api.hasoffers.com/Apiv3/json?
      NetworkToken=${netToken}&
      Target=OfferDisabledLink&
      Method=delete&
      id=${id}`)
  }


}
