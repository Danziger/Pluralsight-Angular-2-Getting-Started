import { Injectable } from "angular2/core";
import { Http, Response } from "angular2/http";
import { Observable } from "rxjs/Observable";

import { IProduct } from "../../models/product";

/*
    Only really needed if the service itself has an injected dependency. However, it is recommended for consistency that
    all the services use it.
*/

@Injectable()

export class ProductService {

    private _productUrl:string = 'api/products/products.json'; // Local JSON file

    constructor(private _http: Http) {}

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            .map((res: Response) => <IProduct[]> res.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);

        return Observable.throw(error.json().error || 'Server Error :(');
    }
}
