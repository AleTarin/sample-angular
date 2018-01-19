import { Component } from '@angular-devkit/core';

@Component({
    selector: 'pm-star',
    templateUrl: ['./star.componen.html'],
    styleUrls: ['./star.component.css']
})

export class StartComponent{
    rating: number;
    starWidth: number;
}