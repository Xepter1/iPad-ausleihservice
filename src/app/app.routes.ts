import { Routes } from '@angular/router';
import { VilsbiburgComponent } from './vilsbiburg/vilsbiburg.component';
import { UebersichtComponent } from './uebersicht/uebersicht.component';
import { IpadEditComponent } from './ipad-edit/ipad-edit.component';

export const routes: Routes = [

    {path:'vilsbiburg',component:VilsbiburgComponent},
    {path:'uebersicht',component:UebersichtComponent},
    {path:'ipad-edit/:id',component:IpadEditComponent},
    {path:'',redirectTo:'uebersicht',pathMatch:'full'},

];
