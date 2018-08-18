import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'pairs'})
export class KeyValuePipe implements PipeTransform{
    transform(value: any, args:string[]): any{
        let pairs : any = [];
        for(let key in value){
            pairs.push({key: key, value: value[key]});
        }
        return pairs;
    }
}