import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct, SortTypes, ISortQuery } from '../interfaces';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(
    private http: HttpClient,
  ) { }

  allItems(
    collection: string,
    displayFilter?: boolean,
    sort?: {[key: string]: number},
    skip?: number,
    limit?: number
  ): Observable<{ total: number, items: IProduct[] | any[] }> {
    if (!displayFilter) {
      displayFilter = false;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams()
        .set('displayFilter', displayFilter + '')
        .set('sort', JSON.stringify(sort))
        .set('skip', skip + '')
        .set('limit', limit + '')
    };
    return this.http.get<{ total: number, items: IProduct[] | any[] }>(
      'api/db/all-items/' + collection,
      httpOptions
    );
  }

  itemsByParents(
    collection: string,
    parents: string[],
    displayFilter?: boolean,
    sort?: { [key: string]: number },
    skip?: number,
    limit?: number
  ): Observable<{ total: number, items: IProduct[] | any[] }> {
    if (!displayFilter) {
      displayFilter = false;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams()
        .set('displayFilter', displayFilter + '')
        .set('sort', JSON.stringify(sort))
        .set('skip', skip + '')
        .set('limit', limit + '')
        .set('parents', JSON.stringify(parents))
    };
    return this.http.get<{ total: number , items: IProduct[] | any[] }>(
      'api/db/items-by-parents/' + collection ,
      httpOptions
    );
  }
}
