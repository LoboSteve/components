//Importing Angular dependencies
import { Component, forwardRef, Input, ElementRef, Renderer, IterableDiffers, ChangeDetectorRef} from '@angular/core';
import { NG_VALUE_ACCESSOR} from '@angular/forms';
import { Request  } from '@angular/http';
import { trigger,state,style,transition,animate} from '@angular/animations';

//Importing PrimeNg dependencies
import { Dropdown as PrimeNgDropdown } from 'primeng/components/dropdown/dropdown';
import { DomHandler } from "primeng/components/dom/domhandler";
import { ObjectUtils } from 'primeng/components/utils/ObjectUtils';

//Importing custom dependencies
import { DropdownOption } from './dropdown.model';
import { DropdownService } from './dropdown.service';

export const DROPDOWN_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Dropdown),
  multi: true
};

@Component({
	selector: 'sa-dropdown',
	templateUrl: './dropdown.html',
	styleUrls: ['./dropdown.less'],
	animations: [ 
		trigger('panelState', [
          state('hidden', style({
              opacity: 0
          })),
          state('visible', style({
              opacity: 1
          })),
          transition('visible => hidden', animate('400ms ease-in')),
          transition('hidden => visible', animate('400ms ease-out'))
      ])
	],	
	providers: [DomHandler, ObjectUtils, DROPDOWN_VALUE_ACCESSOR, PrimeNgDropdown, DropdownService]
})

export class Dropdown extends PrimeNgDropdown { 	
   @Input()
   data: Request | any[] | Function;

   @Input('label-field')
   labelField: string;
   
   constructor(el: ElementRef, domHandler: DomHandler, renderer: Renderer, differs: IterableDiffers,
     cd: ChangeDetectorRef, objectUtils: ObjectUtils, public ds: DropdownService){
   	   super(el, domHandler, renderer, differs, cd, objectUtils);
   }
   
   ngOnInit() {   
      if(this.data){  
        this.ds.process(this.data, this.labelField).subscribe(data => { 
          this.options = data
        });
      }
      super.ngOnInit();
   }

}