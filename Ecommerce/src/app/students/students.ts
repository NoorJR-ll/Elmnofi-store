import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-students',
  imports: [FormsModule, CommonModule],
  templateUrl: './students.html',
  styleUrl: './students.css'
})
export class Students {

  selectedTeam:string="All";
  studentTeams:{name:string,TeamName:string}[]=[];
  filteredTeams:{name:string,TeamName:string}[]=[];
  constructor()
  {
    this.studentTeams=[
      {
        name:"Noor Fareed",
        TeamName:"Team1"
      },
      {
        name:"Mohamed Lotfy",
        TeamName:"Team1"
      },
      {
        name:"Mohamed Hamdi",
        TeamName:"Team2"
      },
      {
        name:"Ahmed Mohamed",
        TeamName:"Team2"
      },
      {
        name:"Abdelrahman Yasser",
        TeamName:"Team3"
      },
      {
        name:"Kerolos Fayez",
        TeamName:"Team3"
      },

    ]
    this.filteredTeams = this.studentTeams;
  }
  filterAllStudents(){
    // this.filteredTeams =  this.studentTeams.filter((team) => team.TeamName === this.selectedTeam)
    // console.log(this.selectedTeam)

    this.filteredTeams = this.selectedTeam==="All"? this.studentTeams : this.studentTeams.filter((team) => team.TeamName === this.selectedTeam)
  }


flag:boolean=true;

toggle(){
  this.flag=!this.flag;
}


}
