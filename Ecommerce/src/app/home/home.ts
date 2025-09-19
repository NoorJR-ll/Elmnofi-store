import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
TrackName:string ="Mearn Track";
flag:boolean=false;
person:{id:number, name:string}={id:1,name:"omar"};
student?:{id:number,name:string}; // | undefined

student2!:{id:number,name:string}; //May be throw error 
imgUrl:string ='a.jpg'
srcImg:string ='images/b.jpg'

}
