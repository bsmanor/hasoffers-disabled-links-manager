import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DisabledLinksResponse } from '../models/getDisabledLinksResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoApiService {

  networkId = 'manor';
  networkToken = 'NETIlDlNCCAsW39apdfi33CrecceQR';

  constructor(private http: HttpClient) { }

  getDisabledLinks() {
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
      fields[]=aff_info1`)
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
