import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'favorite',
    templateUrl: './favorite.component.html',
    styleUrls: ['./favorite.component.css'],
    styles: [
    `
        .glyphicon {
            color:green;
        }
    `

    ],
    inputs: ['myVariable'], // Can give input property but it should match the variable/field declared
    /*
        Allows angular to emulate shadow DOM. 
        Native leaves it to browser. Currently chrome > v53 and safari implements shadow DOM
        None does not implement shadow DOM and styles leaks to the entite DOM with no encapsulation
    */
    encapsulation: ViewEncapsulation.Emulated 
})
export class FavoriteComponent implements OnInit{
    @Input("isFavorite")
    isSelected:boolean;
    // Declared as Input inside the inputs property of component decorator
    myVariable:string;

    @Output("change")
    favoriteChange = new EventEmitter();

    

    onClick(){
        //console.log("selected")
        this.isSelected = !this.isSelected; 
        this.favoriteChange.emit({isSelected:this.isSelected})
    }

    ngOnInit(){
    }

}

/*  Define an interface with the component and this is what is returned as part of event emiter to the subscribers.
    Here the subscriber is for example is App component
*/
export interface FavoriteEvent{
    isSelected:boolean;
}