import { Component } from '@angular/core';
import { Ipad } from '../models/ipad.model';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ipad-list',
  imports: [CommonModule],
  templateUrl: './ipad-list.component.html',
  styleUrl: './ipad-list.component.css'
})
export class IpadListComponent {
  @Input()ipadList:Ipad[] = []; //Liste wird von der Eltern-Kompnente übergeben
}
