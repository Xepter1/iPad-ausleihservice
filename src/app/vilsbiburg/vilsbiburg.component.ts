import { Component } from '@angular/core';
import { IPAD_LIST } from '../models/ipad.data';
import { Ipad } from '../models/ipad.model';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-vilsbiburg',
  imports: [CommonModule],
  templateUrl: './vilsbiburg.component.html',
  styleUrl: './vilsbiburg.component.css'
})
export class VilsbiburgComponent {

  ipadList: Ipad[] = []; //hier speichern wir die IPads

  constructor(){
    this.ipadList = IPAD_LIST.filter(ipad => ipad.location === 'Vilsbiburg'); //Nur VIB laden
  }

}
