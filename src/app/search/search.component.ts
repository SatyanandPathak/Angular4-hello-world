import { productList } from './data';
import { Product } from './product';
import { OnInit, Component } from '@angular/core';

@Component({
    selector:'custom-search',
    styleUrls: ['./search.component.css'],
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {


    


    filteredItems : Product[];
    pages : number = 4;
    pageSize : number = 5;
    pageNumber : number = 0;
    currentIndex : number = 1;
    items: Product[];
    pagesIndex : Array<number>;
    pageStart : number = 1;
    inputName : string = '';
 
    constructor( ){
        this.filteredItems = productList;
        this.init();
    };
    init(){
          this.currentIndex = 1;
          this.pageStart = 1;
          this.pages = 4; // Max Number of pages to display in the nav link below

          //this.pageNumber = parseInt(""+ (this.filteredItems.length / this.pageSize));
          this.pageNumber = Math.floor(this.filteredItems.length / this.pageSize);
          if(this.filteredItems.length % this.pageSize != 0){
             this.pageNumber ++;
          }

          
     
          if(this.pageNumber  < this.pages){
                this.pages =  this.pageNumber;
          }
        
          this.refreshItems();
          console.log("this.pageNumber :  "+this.pageNumber);
    }
 
    FilterByName(){
       this.filteredItems = [];
       if(this.inputName != ""){
             productList.forEach(element => {
                 if(element.name.toUpperCase().indexOf(this.inputName.toUpperCase())>=0){
                   this.filteredItems.push(element);
                }
             });
       }else{
          this.filteredItems = productList;
       }
       console.log(this.filteredItems);
       this.init();
    }
    fillArray(): any{
       var obj = new Array();
       for(var index = this.pageStart; index< this.pageStart + this.pages; index ++) {
                   obj.push(index);
       }
       return obj;
    }
    refreshItems(){
                this.items = this.filteredItems.slice((this.currentIndex - 1)*this.pageSize, (this.currentIndex) * this.pageSize);
                this.pagesIndex =  this.fillArray();
    }
    prevPage(){
       if(this.currentIndex>1){
          this.currentIndex --;
       } 
       if(this.currentIndex < this.pageStart){
          this.pageStart = this.currentIndex;
       }
       this.refreshItems();
    }
    nextPage(){
       if(this.currentIndex < this.pageNumber){
             this.currentIndex ++;
       }
       if(this.currentIndex >= (this.pageStart + this.pages)){
          this.pageStart = this.currentIndex - this.pages + 1;
       }
  
       this.refreshItems();
    }
     setPage(index : number){
          this.currentIndex = index;
          this.refreshItems();
     }


    ngOnInit(){

    }
}