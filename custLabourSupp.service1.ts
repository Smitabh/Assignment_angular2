import { Injectable } from '@angular/core';  
import { Http, Response, RequestOptions, Headers } from '@angular/http';  
import { dimDesig } from '../model/tbl_mapping';
import { Observable } from 'rxjs/Rx'; 
import { Info,customerInfo,submitdata} from '../model/tbl_personInfo';
import { commonInformation } from '../../common/commonInformation';
import * as myGlobals from "../../global"; //Url link

@Injectable()  
export class custLabourSuppService  
{  
    constructor(private http: Http) { }  

    private commentsUrl:string = myGlobals.globalBaseURL+'getDesignation'; 
    private commetsUrl:string = myGlobals.globalBaseURL+'geCustList'; 
    
    getDesigList(): Observable<dimDesig[]> {  
        return this.http.get(this.commentsUrl)
            .map(res => res.json())  
            .catch(this.handleError);  
    }  
    getcustomerdetailsList(): Observable<Info[]> 
    {
        return this.http.get(this.commetsUrl)
                .map(res => res.json())  
                .catch(this.handleError); 
    }  
    private handleError(error: Response | any) {  
        // In a real world app, we might use a remote logging infrastructure  
        let errMsg: string;  
        if (error instanceof Response) {  
            const body = error.json() || '';  
            const err = body.error || JSON.stringify(body);  
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;  
        } else {  
            errMsg = error.message ? error.message : error.toString();  
        }  
        //console.error(errMsg);  
        return Observable.throw(errMsg);  
    }  
    
    private commentUrle:string;
    //Save person Details
    savePersonDetls(body: Object,flag:number,pagenm:string): Observable<submitdata> {
        debugger
        //flag==1 ? this.commentUrl + "savecustomer" : this.commentUrl + "updatecustomer"
        //console.log(flag);
        if(flag == 1 && pagenm == 'customerpage' ){
            this.commentUrle = myGlobals.globalBaseURL+'savecustomer';
        }
        if(flag == 2  && pagenm == 'customerpage'  ){
            this.commentUrle = myGlobals.globalBaseURL+'savecustomer';
        }
        if(flag == 1 && pagenm == 'labourpage' ){
            this.commentUrle = myGlobals.globalBaseURL+'savecustomer';
        }
        if(flag == 2  && pagenm == 'labourpage'  ){
            this.commentUrle = myGlobals.globalBaseURL+'savecustomer';
        }
       let bodyString = JSON.stringify(body); // Stringify payload
       let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
       let options = new RequestOptions({ headers: headers }); // Create a request option
      
       return this.http.post(this.commentUrle, bodyString, options) // ...using post request
                        .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
   }
} 