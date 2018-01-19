import { Component, OnChanges, Input } from '@angular/core';
import { Output } from '@angular/core/src/metadata/directives';
import { EventEmitter } from 'selenium-webdriver';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }

    onClick() {
        this.ratingClicked.emit('The rating ${this.rating} was clicked!');
    }
}
