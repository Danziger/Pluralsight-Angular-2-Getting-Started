import { Component } from "angular2/core";
import { HTTP_PROVIDERS } from "angular2/http";
import { RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from "angular2/router";

import 'rxjs/Rx'; // Load all features

import { WelcomeComponent } from "./components/welcome/welcome.component";
import { ProductListComponent } from './components/products/list/product-list.component';
import { ProductDetailComponent } from './components/products/detail/product-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { ProductService } from "./services/product/product.service";

// TODO: Update @RouteConfig to @Routes

@RouteConfig([
    { path: '/', name: 'Welcome', component: WelcomeComponent, useAsDefault: true },
    { path: '/products', name: 'Products', component: ProductListComponent },
    { path: '/product/:id', name: 'ProductDetail', component: ProductDetailComponent },
    { path: '/**', name: 'NotFound', component: NotFoundComponent },
])

@Component({
    selector: 'pm-app',
    template: `
    <nav class='navbar navbar-default'>
        <div class='container-fluid'>
            <h1><a class='navbar-brand'>{{pageTitle}}</a></h1>

            <ul class='nav navbar-nav'>
                <li><a [routerLink]="['Welcome']">Home</a></li>
                <li><a [routerLink]="['Products']">Product List</a></li>
            </ul>
        </div>
    </nav>

    <div class="container">
        <router-outlet></router-outlet>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ProductService, HTTP_PROVIDERS, ROUTER_PROVIDERS],
})

export class AppComponent {
    pageTitle: string = 'My First Angular 2 Page!';
}


/*


@RouteConfig([
    { path: '/', redirectTo: ['Home'] },
    { path: '/home', name: 'Home', component: HomeComponent },
    // all other routes and finally at the last add
    {path: '/*path', component: NotFound}

    This will only load the 'NotFound' component and the url will be same as what you navigate to. In case you want all not matching routes to redirect to a '404' url, you can do something like:

//at the end of the route definitions
{ path: '/404', name: '404', component: PageNotFoundComponent },
{ path: '/*path', redirectTo:['404'] }

*/