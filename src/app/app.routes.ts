import { Routes } from '@angular/router';
import { VilsbiburgComponent } from './vilsbiburg/vilsbiburg.component';
import { UebersichtComponent } from './uebersicht/uebersicht.component';

export const routes: Routes = [

    {path:'vilsbiburg',component:VilsbiburgComponent},
    {path:'uebersicht',component:UebersichtComponent},
    {path:'',redirectTo:'uebersicht',pathMatch:'full'},

];
