import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'my-panel',
    styleUrls: ['./panel.component.css'],
    templateUrl: './panel.component.html'
})
export class PanelComponent implements OnInit{

    @Input("header")
    header:string;
    @Input("body")
    body:string;

    @Output("changeNotification")
    change = new EventEmitter();

    panelClicked(){
        console.log("panel clicked")
        this.change.emit();
    }

    constructor(){

    }
    ngOnInit(){

    }

}