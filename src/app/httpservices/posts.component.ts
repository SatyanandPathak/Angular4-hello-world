import { OnInit, Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'posts-component',
    templateUrl:'./posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
    posts:any[];

    ngOnInit(){}
    constructor(http : Http){

        /*http.get('http://jsonplaceholder.typicode.com/posts')
            .subscribe(response => {
                this.posts = response.json();
            });*/
        
        
        http.get('http://localhost:8085/employees')
            .subscribe(response => {
                this.posts = response.json();
            }, error => {
                console.log(error)
            });
        
        //let headers = new HttpHeaders();
        //http.get('https://cit2.billingv2.api.rackspacecloud.com/info', )

    }
}