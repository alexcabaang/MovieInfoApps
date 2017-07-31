import { Component, OnChanges, Input, 
        Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'md-review',
    templateUrl: 'app/shared/review.component.html', 
    styleUrls: ['app/shared/review.component.css']
})
export class ReviewComponent implements OnChanges{
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> = 
        new EventEmitter<string>();
    reviewWidth: number; // calculated onChange

    ngOnChanges(): void {
        this.reviewWidth = this.rating * 95 / 4;
    }

    onClick() {
        this.ratingClicked.emit(`This movie got a rating of ${this.rating}`);
    }
} 