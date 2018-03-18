import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LogInComponentComponent } from './log-in-component/log-in-component.component';
import { LogUpComponentComponent } from './log-up-component/log-up-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { StatisticComponentComponent } from './statistic-component/statistic-component.component';
import { AddItemComponentComponent } from './add-item-component/add-item-component.component';
import { ListOfItemsComponentComponent } from './list-of-items-component/list-of-items-component.component';
import { HistogramComponentComponent } from './histogram-component/histogram-component.component';
import { GraphicComponentComponent } from './graphic-component/graphic-component.component';
import { TableComponentComponent } from './table-component/table-component.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponentComponent,
    LogUpComponentComponent,
    HomeComponentComponent,
    StatisticComponentComponent,
    AddItemComponentComponent,
    ListOfItemsComponentComponent,
    HistogramComponentComponent,
    GraphicComponentComponent,
    TableComponentComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
