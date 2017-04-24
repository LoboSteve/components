//Importing Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

//Custom Modules
import { DropdownDemoModule } from './demos/dropdown/dropdowndemo.module';

//Custom Components
import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
 
@NgModule({
  declarations: [
    AppComponent
  ], 
  imports: [
  	RouterModule.forRoot(appRoutes, { useHash: true }),
    BrowserModule,
    DropdownDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
