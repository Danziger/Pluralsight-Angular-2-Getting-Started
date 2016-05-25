import { Component, ViewEncapsulation, OnInit } from "angular2/core";
import { IProduct } from "../../../models/product.ts";
import { ProductFilterPipe } from "../filter/product-filter.pipe";
import { StartComponent } from "../../../shared-components/star/star.component";
import { ProductService } from "../../../services/product/product.service";
import { ROUTER_DIRECTIVES } from "angular2/router";

@Component({
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'app/components/products/list/product-list.component.html',
    styleUrls: ['app/components/products/list/product-list.component.css'],
    pipes: [ProductFilterPipe],
    directives: [StartComponent, ROUTER_DIRECTIVES],
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';

    listFilter: string = 'cart';

    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    timeoutId: number = null;
    errorMessage: string;

    products: IProduct[] = [];

    /*
    private _productService;

    constructor(productService: ProductService) {
        this._productService = productService;
    }
    */

    // Cool shorthand for injected stuff! :D Also works with public and protected
    constructor(private _productService: ProductService) {
        // Constructor should not do too much work, ngOnInit will do!
    }

    // COMPONENT LIFECYCLE:

    ngOnInit(): void {
        this._productService.getProducts().subscribe(
            products => this.products = products,
            error => this.errorMessage = <any>error);
    }

    // COMPONENT STATE:

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List · ' + message;

        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }

        this.timeoutId = setTimeout(() => {
            this.pageTitle = 'Product List';
        }, 3000);
    }
}
