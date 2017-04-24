//Importing Modlues
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//PrimeNg Components
import { TabViewModule } from 'primeng/components/tabview/tabview';
import { CodeHighlighterModule } from 'primeng/components/codehighlighter/codehighlighter';
import { SharedModule } from 'primeng/components/common/shared';

//Importing Custom Modules
import { DropdownModule  } from '../../components/dropdown/dropdown';

//Importing Components
import { DropdownDemoComponent  } from './dropdowndemo.component';

@NgModule({
    imports: [
        CommonModule,
    	BrowserModule,
    	BrowserAnimationsModule,
    	FormsModule,
        DropdownModule, 
    	TabViewModule,
        SharedModule,
    	CodeHighlighterModule
	],
    exports: [DropdownDemoComponent],
    declarations: [DropdownDemoComponent]
})

export class DropdownDemoModule { }