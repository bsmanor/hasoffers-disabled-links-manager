import { BrandInformation } from './../models/brandInformation';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter } from 'rxjs/operators';
import { DisabledLinksResponse } from '../models/getDisabledLinksResponse';
import { Observable } from 'rxjs';
import { FiltersInterface, Filters } from './../models/filters';

@Injectable({
  providedIn: 'root'
})
export class HoApiService {

  // networkId = 'manor';
  // networkToken = 'NETIlDlNCCAsW39apdfi33CrecceQR';
  networkId: string;
  networkToken: string;
  public brandInformation: BrandInformation;

  constructor(private http: HttpClient) { }

  getTotalCount(filters?: FiltersInterface) {
    const localFilters = new Filters(filters);
    const limit = 1;
    return this.http.get(
      `https://${this.networkId}.api.hasoffers.com/Apiv3/json?
      NetworkToken=${this.networkToken}&
      Target=OfferDisabledLink&
      Method=findAll&
      fields[]=id&
      ${localFilters.filtersQueryString}
      limit=${limit}&page=1`);
  }

  getDisabledLinks(limit = 25, page = 1, filters?: FiltersInterface) {
    const localFilters = new Filters(filters);
    return this.http.get(
      `https://${this.networkId}.api.hasoffers.com/Apiv3/json?
      NetworkToken=${this.networkToken}&
      Target=OfferDisabledLink&
      Method=findAll&
      fields[]=id&
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
      ${localFilters.filtersQueryString}
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

  validateNetorkCreds(id, token): Observable<any> {
    this.http.get(`https://${id}.api.hasoffers.com/Apiv3/json?NetworkToken=${token}&Target=Application&Method=getBrand`)
    .subscribe( (res: BrandInformation) => {
      if (res.response.status === 1) {
        this.networkId = id;
        this.networkToken = token;
        this.brandInformation = res;
      }
    })
    return this.http.get(`https://${id}.api.hasoffers.com/Apiv3/json?NetworkToken=${token}&Target=Application&Method=getBrand`);
  }

  getBrandInformation() {
    this.http.get(`https://${this.networkId}.api.hasoffers.com/Apiv3/json?NetworkToken=${this.networkToken}&Target=Application&Method=getBrand`)
    .subscribe( (res: BrandInformation) => {
      this.brandInformation = res;
    })
  }


}
