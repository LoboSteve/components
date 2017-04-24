
import { Injectable } from '@angular/core';
import { Http, Request } from '@angular/http';

import 'rxjs/Rx';
import { Observable }     from 'rxjs/Observable';

import { DropdownOption } from './dropdown.model';

@Injectable()
export class DropdownService{

	constructor(private http: Http){

	}

	
	process(data: any, labelField: string){
		let observable; 
		if (Array.isArray(data)){
			observable = Observable.of(data);
		}else if ( data instanceof Request){
			observable = this.getDataArray(data);                
		}else if( typeof data === 'function'){
			observable = data.call();
			if (Array.isArray(observable)){
				observable = Observable.of(observable);
			}
		}

		if(observable){
			observable = observable.flatMap( data => {
				return this.getOptionsList(data, labelField) 
			});
		} else{	
			observable = Observable.of([]);
		}

		return observable;
	}

	getDataArray(data: Request): Observable<any[]>{
		return this.http.request(data).flatMap( response => { 
					let o = response.json();
					return Observable.of((typeof o === 'object') ? o[Object.keys(o)[0]] : o);
				}); 
	}

	getOptionsList(lst: any[], labelField: string): Observable<DropdownOption[]>{
		return Observable.of( lst.map( x => { 
			return { 
				"label" :  labelField && (typeof x === 'object') ? x[labelField] : x, 
				"value": x 
			} ;
		}));
	}

}