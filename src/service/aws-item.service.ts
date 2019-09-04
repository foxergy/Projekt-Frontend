import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { AwsItems } from './model/AwsItems';
import { Observable } from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json',
                              'Accept':'application/json'})
};

@Injectable({
    providedIn: 'root',
})
export class AwsItemService{
    url: string= "https://gc7d1qqi4j.execute-api.us-west-2.amazonaws.com/Beta/sensor-items";

    constructor(public httpClient: HttpClient){}

    getAwsItems(): Observable<AwsItems>{
        console.log('fetched  '+this.url)
        return this.httpClient.get<AwsItems>(this.url)
        .pipe(
            tap(entities=> {
                if(entities.Items!==undefined){
                    console.log('fetched  '+entities.Items.length+' items')
                }else{
                    console.table(entities);
                    console.log("items are undefined "+entities);
                }
            }
            ));
    }
}