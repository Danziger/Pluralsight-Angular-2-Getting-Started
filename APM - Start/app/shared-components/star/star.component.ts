import { Component, OnChanges, Input, Output, EventEmitter } from "angular2/core";

@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared-components/star/star.component.html',
    styleUrls: ['app/shared-components/star/star.component.css'],
})

export class StartComponent implements OnChanges {
    starWidth: number;

    @Input() rating: number = 2.5;

    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
       this.starWidth = this.rating * 86 / 5;
    }

    onClick() {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}
