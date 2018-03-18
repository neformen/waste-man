import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { LogInComponentComponent } from './log-in-component/log-in-component.component';
import { LogUpComponentComponent } from './log-up-component/log-up-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { StatisticComponentComponent } from './statistic-component/statistic-component.component';
import { AddItemComponentComponent } from './add-item-component/add-item-component.component';
import { ListOfItemsComponentComponent } from './list-of-items-component/list-of-items-component.component';
import { HistogramComponentComponent } from './histogram-component/histogram-component.component';
import { GraphicComponentComponent } from './graphic-component/graphic-component.component';
import { TableComponentComponent } from './table-component/table-component.component';

const appRoutes: Routes = [
    {path: '', component: LogInComponentComponent},
    {path: 'register', component: LogUpComponentComponent},
    {path: 'home', component: HomeComponentComponent},
    {path: 'statistic', component: StatisticComponentComponent, children: [
        {path: '', component: HistogramComponentComponent},
        {path: 'graphic', component: GraphicComponentComponent},
        {path: 'table', component: TableComponentComponent}
    ]},
    {path: 'add', component: AddItemComponentComponent},
    {path: 'list', component: ListOfItemsComponentComponent}
];

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}

