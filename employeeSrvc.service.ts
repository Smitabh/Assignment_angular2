import { Injectable } from '@angular/core'
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { empdataInfo } from '../Model/gridData';//'../Model/gridData';

@Injectable()  
export class empService  
{  
   constructor(private http: Http) { }  
 
   private commentUrl:string = 'https://themanojshukla.github.io/mockdata.json';

   /*getEmplList(): Observable<empData[]> {  
        return this.http.get(this.commentUrl)
            .map(res => res.json())  
            .catch(this.handleError);  
    } 
        return Observable.throw(errMsg);  
   }  */
   getEmplList(): Observable<empdataInfo[]> {
    return this.http.get(this.commentUrl)
        // ...and calling .json() on the response to return data
        .map((res: Response) => res.json())
        //...errors if any
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
}

}
