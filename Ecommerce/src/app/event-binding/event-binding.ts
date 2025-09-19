import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-binding',
  imports: [FormsModule],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css'
})
export class EventBinding {

inputValue:string=''

  ShowData(){
    console.log("Button Clicked")
  }

  getInputValue(e:any){
    // let target = e.target as HTMLInputElement;
    console.log(e)
    // this.inputValue = target.value;
  }

  display(el:any){
console.log(el.textContent)
  }
}
