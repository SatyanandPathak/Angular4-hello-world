import { OnInit, Component } from '@angular/core';

@Component({
    selector: 'contact-forms',
    styleUrls:['./contact-forms.component.css'],
    templateUrl: './contact-forms.component.html'
})
export class ContactForm implements OnInit{

    contactMethods = [
        {id:1, name:"EMAIL"},
        {id:2, name:"PHONE"},
        {id:3, name:"PAPER"}
    ];
    ngOnInit(){}
    constructor(){}

    log(x){
        console.log("value obtained is==", x)
    }

    submitForm = function(f){
        console.log("form value", f.value)
        

    }

    
}