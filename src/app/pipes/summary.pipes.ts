import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'summary'
})
export class SummaryPipe implements PipeTransform {

    transform(value: string, limit?:number) {
        if (!value)
            return null;

        let myLimit = 50;
        if(limit){
            myLimit = limit;
        }
        return value.substring(0, myLimit) + '...';
    }

}