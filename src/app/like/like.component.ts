import { OnInit, Component, Input } from '@angular/core';

@Component({
    selector:'like',
    templateUrl: 'like.component.html',
    styleUrls: ['like.component.css']
})
export class LikeComponent implements OnInit{
    @Input("heart-selected")
    isSelected:boolean;
    @Input("total-likes")
    totalLikes:number;

    onHeartClick(){        
        this.isSelected = !this.isSelected;
        this.totalLikes += (this.isSelected)? 1 : -1;
        
    }
    constructor(){

    }
    ngOnInit(){

    }

}