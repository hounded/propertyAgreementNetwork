import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class HyperledgerService {
  private accessToken = 'oR2kEgt9LxbiN6BG29LwmhWQ4wau7BCOfLoSgpVMZSCqyTCI4JZb6DQlchWn4Fco';
  private restServerUrl = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) {}

  createProperty(ct: string, address: string, estate: string, legalDesc: string, area: string, lotFlatUnit: string,
                 dp: string, owner: string) {
    const url: string = this.restServerUrl +  'io.property.agreement.network.Property';
    const body = {
      '$class': 'io.property.agreement.network.Property',
      'ct': ct,
      'address': address,
      'estate': estate,
      'legalDescription': legalDesc,
      'area': area,
      'lotFlatUnit': lotFlatUnit,
      'dp': dp,
      'owner': owner,
    }
    return this.http.post(url, body, {
      headers: new HttpHeaders().set('X-Access-Token', this.accessToken)
    });
  }

  getProperties( participant: string) {
    const url: string = this.restServerUrl +  'io.property.agreement.network.Property';
    return this.http.get(url, {
      headers: new HttpHeaders().set('X-Access-Token', this.accessToken),
      params : new HttpParams().set('filter', '{"owner":"resource:' + participant + '"}')
    });
  }

  getCurrentParticipant() {
    const url: string = this.restServerUrl + 'system/ping';
    return this.http.get(url, {
      headers: new HttpHeaders().set('X-Access-Token', this.accessToken),
    });
  }


}
