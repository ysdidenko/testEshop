import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Message, Product } from '../models';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private basePath = 'https://shoeshop-test-api.azurewebsites.net';
  private apiKey = '12345';

  constructor(private http: HttpClient) {}

  /**
   * Retrieves all products
   */
  public notWorkinggetProducts(): Observable<Product[]> {
    const path = this.basePath + '/Product';
    let headers = new HttpHeaders().set('X-APIKEY', this.apiKey);

    headers = headers.append('Accept', '*/*');

    return this.http.get<Product[]>(path, { headers });
  }

  /**
   * As I'm getting the CORS error, need to mock the response
   * Also I have extended that with image to show
   */

  public getProducts(): Observable<Product[]> {
    return of([
      {
        Name: 'The Office',
        Description:
          'This is a mans shoe. It is a conftable wear and available in multiple colours. It is comftable and stylish',
        SKU: 'SH1928',
        Image:
          'https://images.asos-media.com/products/koi-footwear-chunky-brogue-in-black-with-green-detail/20134757-1-black?$n_640w$&wid=634&fit=constrain',
      },
      {
        Name: 'The Bar',
        Description:
          'This is a female shoe. It is a conftable wear and available in either red, black or birght green. It is uncomftable, but stylish. It has a 27 heel',
        SKU: 'SH1922',
        Image:
          'https://images.asos-media.com/products/kenneth-cole-riley-mid-heeled-court-shoe-in-tan-leather/22122399-1-classictan?$n_640w$&wid=634&fit=constrain',
      },
      {
        Name: 'The Club',
        Description:
          'A stylish unisex trainer that is available in any colour as long as it is illuminous green. This stylist trainer has funky flashing lights in the heel to make you feel like a 5 year old',
        SKU: 'SH1923',
        Image:
          'https://images.asos-media.com/products/topman-boat-shoes-in-tan/20758534-1-tan?$n_640w$&wid=634&fit=constrain',
      },
      {
        Name: 'The Bar',
        Description:
          'This is a female shoe. It is a conftable wear and available in either red, black or birght green. It is uncomftable, but stylish. It has a 27 heel',
        SKU: 'SH1922',
        Image:
          'https://images.asos-media.com/products/kenneth-cole-riley-mid-heeled-court-shoe-in-tan-leather/22122399-1-classictan?$n_640w$&wid=634&fit=constrain',
      },
      {
        Name: 'The Club',
        Description:
          'A stylish unisex trainer that is available in any colour as long as it is illuminous green. This stylist trainer has funky flashing lights in the heel to make you feel like a 5 year old',
        SKU: 'SH1923',
        Image:
          'https://images.asos-media.com/products/topman-boat-shoes-in-tan/20758534-1-tan?$n_640w$&wid=634&fit=constrain',
      },
      {
        Name: 'The Office',
        Description:
          'This is a mans shoe. It is a conftable wear and available in multiple colours. It is comftable and stylish',
        SKU: 'SH1928',
        Image:
          'https://images.asos-media.com/products/koi-footwear-chunky-brogue-in-black-with-green-detail/20134757-1-black?$n_640w$&wid=634&fit=constrain',
      },
      {
        Name: 'The Bar',
        Description:
          'This is a female shoe. It is a conftable wear and available in either red, black or birght green. It is uncomftable, but stylish. It has a 27 heel',
        SKU: 'SH1922',
        Image:
          'https://images.asos-media.com/products/kenneth-cole-riley-mid-heeled-court-shoe-in-tan-leather/22122399-1-classictan?$n_640w$&wid=634&fit=constrain',
      },
    ]).pipe(delay(2000));
  }

  /**
   * Retrieves product details
   * @param sku - product code
   */
  public notWorkinggetProductDetails(sku: string): Observable<Product> {
    const path = this.basePath + '/Product/' + sku;
    let headers = new HttpHeaders().set('X-APIKEY', this.apiKey);

    headers = headers.append('Accept', '*/*');

    return this.http.get<Product>(path, { headers });
  }

  /**
   * As I'm getting the CORS error, need to mock the response
   * Also I have extended that with image to show
   * @param sku - product code
   */

  public getProductDetails(sku: string): Observable<Product> {
    return of({
      Name: 'The Bar',
      Description:
        'This is a female shoe. It is a conftable wear and available in either red, black or birght green. It is uncomftable, but stylish. It has a 27 heel',
      Price: 125.99,
      SKU: 'SH1922',
      StockTotal: 12,
      Image:
        'https://images.asos-media.com/products/koi-footwear-chunky-brogue-in-black-with-green-detail/20134757-1-black?$n_640w$&wid=634&fit=constrain',
    }).pipe(delay(1000));
  }

  /**
   * Retrieves product details
   * @param sku - product code
   */
  public postMessage(message: Message): Observable<any> {
    const path = this.basePath + '/Contact/Message';
    let headers = new HttpHeaders().set('X-APIKEY', this.apiKey);

    headers = headers.append('Accept', '*/*');

    return this.http.post<Message>(path, message, { headers });
  }
}
