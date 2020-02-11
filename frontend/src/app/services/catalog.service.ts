import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(
    private http: HttpClient,
  ) { }

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
}
