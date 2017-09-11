import { CoursesService } from './../courses/courses.service';
import { OnInit, Component } from '@angular/core';

@Component({
    selector: 'mydirectives-demo',
    templateUrl: './directivesdemo.component.html',
    styleUrls: ['directivesdemo.component.css']
})
export class DirectivesDemoComponent implements OnInit {

    myList: Array<number>;
    viewMode='HOME';
    sampleObject = [];
    
    employees = [
        {id:1, name:'Harpreet Bhaweja'},
        {id:2, name:'Sandesh Ramsay'},
        {id:3, name:'Tom Alter'},
        {id:4, name:'Prodini Magmarey'}

    ];

    loadObjects(){
        this.sampleObject = [
            {id: 1, name:"John"},
            {id: 2, name:"Nyle"},
            {id: 1, name:"Frank"}
        ]
    }

    trackObject(index, obj){
        return obj ? obj.id : undefined;
    }
    

    constructor(){

    }

    ngOnInit(){
        this.myList = [1, 2];
    }
}