import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent ,} from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceComponent } from './service/service.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EditEMployeeComponent } from './edit-employee/edit-employee.component';



@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    HomePageComponent,
    EmployeeListComponent,
    EditEMployeeComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule, BrowserAnimationsModule,MaterialModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
