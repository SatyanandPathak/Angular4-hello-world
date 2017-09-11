import { AppComponent } from './../app.component';
import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    //template: `<h1>Courses</h1>`
    templateUrl: './courses.component.html',
    styles: ['./courses.component.css']
    
})
export class CoursesComponent {
    // Variable used for class binding in html
    isDisabled = true;
    
    // Variable used for one way binding from component to view
    inputValue = "Hello";

    // Variable used for two way binding
    twoWayBindingValue = "sample value";
    twoWayBindingValueBetterVal = "Sample Value";

    title: string;
    courses:Array<string>;
    constructor(coursesService: CoursesService){
        this.title = "BSL Components 1";
        this.courses = coursesService.getCourses();

    }

    getTitle = function(){
        return this.title;
    }

    getCourses = function(){
        return this.courses;
        
    }

    buttonClick = function(){
        alert("event binding for click event using '(click)=function'. From view to component")
    }

    classBindingDemo = function(){
        console.log("class binding")
        alert("button disabled is set using boolean value from component")
    }

    eventFiltering = function($event){
        alert("event filtering. Value in the text field is=="+$event.target.value)
    }

    captureValue = function(myVal){
        alert("value is=="+myVal)

    }

    twoWayBinding = function(){
        alert("value is=="+this.twoWayBindingValue)
    }

    twoWayBindingBettter = function(){

        alert("value in better implementation way is=="+this.twoWayBindingValueBetterVal)
    }

    

}