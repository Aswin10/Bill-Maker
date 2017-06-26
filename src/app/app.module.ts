import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './customer/add/add.component';
import { EditComponent } from './customer/edit/edit.component';
import { DetailComponent } from './customer/detail/detail.component';
import {ChartModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddComponent,
    EditComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
