//Importing Angular Modlues
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

//Importing PrimeNg Modlues
import { DropdownModule as PNgDropdownModule } from 'primeng/components/dropdown/dropdown';
import { SharedModule  } from 'primeng/components/common/shared';

//Importing Components
import { Dropdown } from './dropdown.component';

@NgModule({
    imports: [ 
    	CommonModule,
    	HttpModule, 
    	SharedModule,
    	PNgDropdownModule
	],
    exports: [Dropdown],
    declarations: [Dropdown]
})

export class DropdownModule { }
