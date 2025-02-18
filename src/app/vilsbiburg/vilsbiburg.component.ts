import { Component } from '@angular/core';
import { IPAD_LIST } from '../models/ipad.data';
import { Ipad } from '../models/ipad.model';
import { IpadListComponent } from '../ipad-list/ipad-list.component';


@Component({
  selector: 'app-vilsbiburg',
  imports: [IpadListComponent],
  templateUrl: './vilsbiburg.component.html',
  styleUrl: './vilsbiburg.component.css'
})
export class VilsbiburgComponent {

  ipadList: Ipad[] = []; //hier speichern wir die IPads

  constructor(){
    this.ipadList = IPAD_LIST.filter(ipad => ipad.location === 'Vilsbiburg'); //Nur VIB laden
  }

  

}
