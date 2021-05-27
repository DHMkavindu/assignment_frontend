import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) {
  }


  getAllItem(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/item/getPriceList");
  }
}
