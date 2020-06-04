import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ICatalog } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(
    private http: HttpClient,
  ) { }

  checkCategoryExists(_id: string): Observable<{ exists: boolean }> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<{ exists: boolean }>(
      'api/catalog/check-category-exists/' + _id,
      httpOptions
    );
  }

  getPrefix(_id: string): Observable<{ prefix: string }> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<{ prefix: string }>(
      'api/catalog/get-prefix/' + _id,
      httpOptions
    );
  }

  getChildren(_id: string): Observable<ICatalog[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<ICatalog[]>(
      'api/catalog/get-children/' + _id,
      httpOptions
    );
  }

  /**
   * Get all parents of category(_id)
   * included current category
   * excluded root categories: home and common
   *
   */
  getAllParentsInclCurrentCategory(_id: string, topLevel: string): Observable<ICatalog[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams()
        .set('_id', _id)
        .set('topLevel', topLevel)
    };
    return this.http.get<ICatalog[]>(
      'api/catalog/get-all-parents-incl-current-category',
      httpOptions
    );
  }

  /**
   * Get all siblings of category(_id)
   * ???included current category
   *
   */
  getAllSiblingsOfCurrentCategory(_id: string): Observable<ICatalog[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams()
        .set('_id', _id)
    };
    return this.http.get<ICatalog[]>(
      'api/catalog/get-all-siblings-of-current-category',
      httpOptions
    );
  }

}
