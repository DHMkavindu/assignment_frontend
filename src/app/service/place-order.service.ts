import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {AbstractControl} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class PlaceOrderService {
  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) {
  }

  getItems(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/item");
  }

  finalePrice(description: string, qty: number, type: string): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/item/purchase/" + description + "/" + qty + "/" + type + "",);
  }
}
