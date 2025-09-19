import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-comp',
  imports: [CommonModule],
  templateUrl: './directive-comp.html',
  styleUrl: './directive-comp.css'
})
export class DirectiveComp {
products:string[]=["Book" , "Pen" ,"Watches" ,"Notebook"]
}
