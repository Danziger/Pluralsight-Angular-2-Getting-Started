import { Component } from "angular2/core";
import { Router, RouteParams } from "angular2/router";

// Components that are not going to be nested inside other components (like the views) doesn't need the selector property.

@Component({
    templateUrl: 'app/components/products/detail/product-detail.component.html'
})
export class ProductDetailComponent {
    pageTitle: string = 'Product Detail';

    constructor(private _router: Router, private _routeParams: RouteParams) {
        const id = parseInt(this._routeParams.get('id'));

        this.pageTitle += `: ${id}`;
    }

    onBack(): void {
        this._router.navigate(['Products']);
    }

}