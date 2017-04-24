import { Component, OnInit } from '@angular/core';
import { Request, RequestMethod  } from '@angular/http';
import { DropdownOption } from '../../components/dropdown/dropdown.model';
import { Observable }     from 'rxjs/Observable';


@Component({
  selector: 'dropdown-demo',
  templateUrl: './dropdowndemo.html'
})

export class DropdownDemoComponent {
  
  cities: DropdownOption[];

  selectedCity: string;
  selectedCity2: string;
  selectedCity3: string;
  selectedCity4: string;

  cars: DropdownOption[];

  selectedCar: string = 'BMW';

  carBrands: string[];

  citiesLst: object[];

  config: Request;

  dataFn: Function;

  constructor() {
      //Array of Objects implementing DropdownOption interface
      this.cities = [
        {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
        {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
        {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
        {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
        {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
      ];

      //Array of Objects implementing DropdownOption interface
      this.cars = [
        {label: 'Audi', value: 'Audi'},
        {label: 'BMW', value: 'BMW'},
        {label: 'Fiat', value: 'Fiat'},
        {label: 'Ford', value: 'Ford'},
        {label: 'Honda', value: 'Honda'},
        {label: 'Jaguar', value: 'Jaguar'},
        {label: 'Mercedes', value: 'Mercedes'},
        {label: 'Renault', value: 'Renault'},
        {label: 'VW', value: 'VW'},
        {label: 'Volvo', value: 'Volvo'}
      ];

      //Array of String
      this.carBrands = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'VW', 'Volvo'];

      //Array of Custom Objects
      this.citiesLst = [
        {id:1, name: 'New York', code: 'NY'},
        {id:2, name: 'Rome', code: 'RM'},
        {id:3, name: 'London', code: 'LDN'},
        {id:4, name: 'Istanbul', code: 'IST'},
        {id:5, name: 'Paris', code: 'PRS'}
      ];

      //Configurations for fetching data using RequestOptions
      this.config = new Request({
                              method: RequestMethod.Get,
                              url: "./assets/demos/data/cities.json"
                            });

      //Function returning an Observable of an Array bound to the current context
      this.dataFn = (function (){
         var obs = Observable.create((observer) => {
            setTimeout(() => {
              observer.next(this.carBrands);
              observer.complete();
            }, 1000);
          });
         return obs;
      }).bind(this);

  }

}
