import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IProduct } from '../interfaces';
import { Observable, forkJoin, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CatalogService } from './catalog.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient,
    private catalogService: CatalogService,
  ) { }

  loadProduct(_id: string): Observable<IProduct | null | any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      // params: new HttpParams().set('_id', _id)
    };
    return this.http.get<IProduct | null | any>(
      'api/product/load-product/' + _id,
      httpOptions
    );
  }

  upsertProduct(product: IProduct): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post<string>(
      'api/product/upsert-product',
      product,
      httpOptions
    );
  }


  private getSkuList(_id: string): Observable<{ _id: string }[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.get<{ _id: string }[]>(
      'api/product/get-sku-list/' + _id,
      httpOptions
    );
  }

  generateSku(parent_id: string) {
    const getPrefix$ = this.catalogService.getPrefix(parent_id);
    const getSkuList$ = this.getSkuList(parent_id);

    return forkJoin(getPrefix$, getSkuList$).pipe(
      map(
        result => {
          const { prefix } = result[0];

          const skuList = result[1]
            .map(item => item._id) // create [] from {}
            .filter(item => item.slice(0, 3) === prefix) // take elems with needed prefix
            .map(item => +item.slice(3)); // concat prefix, take only numbers

          let freeNumber = 1;
          for (let i = 0; i < skuList.length; i++) {
            if (skuList[i] - (i + 1) >= 1) {
              freeNumber = i + 1;
              break;
            }
            if (i === skuList.length - 1) {
              freeNumber = skuList.length + 1;
            }
          }
          let sku = freeNumber.toString();
          while (sku.length < 4) {
            sku = '0' + sku;
          }
          sku = prefix + sku;
          return sku;
        },
        err => err
      )
    );
  }
}
