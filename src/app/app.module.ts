import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";
import { NewCustomerComponent } from './Components/new-customer/new-customer.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatLegacyInputModule} from "@angular/material/legacy-input";

@NgModule({
  declarations: [
    AppComponent,
    NewCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatLegacyInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
