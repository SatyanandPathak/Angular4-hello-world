import { OnInit, Component } from '@angular/core';

@Component({
    selector:'signup-form',
    templateUrl: './signupform.component.html',
    styleUrls: ['./signupform.component.css']
})
export class SignupFormComponent implements OnInit{
    
    ngOnInit(){}
    constructor(){}
    logDetails(x){
        console.log("user name:", x)
    }

    submitUserDetails(detailsForm) {
        console.log("user details==", detailsForm);
    }

}