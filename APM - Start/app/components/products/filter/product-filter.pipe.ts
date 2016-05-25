import { Pipe } from "angular2/core";
import { PipeTransform } from "angular2/core";
import { IProduct } from "../../../models/product";

@Pipe({
    name: 'productFilter',
})
export class ProductFilterPipe implements PipeTransform {
    transform(value: IProduct[], args: string[]): IProduct[] {
        const filter: string = args[0] ? args[0].toLocaleLowerCase() : null;

        return filter ? value.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}
