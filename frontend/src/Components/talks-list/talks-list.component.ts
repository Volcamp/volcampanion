import {Component, Input, OnInit} from '@angular/core';
import {TalkPlan} from "../../Data/DTO/TalkPlan";
import {Speaker} from "../../Data/DTO/Speaker";
import {compareSchedule} from "../../GeneralVolcamp/CompareTalkPlan";

@Component({
  selector: 'app-talks-list',
  templateUrl: './talks-list.component.html',
  styleUrls: ['./talks-list.component.sass']
})
export class TalksListComponent implements OnInit{
  @Input() talkPlans: TalkPlan[] =[] ;

  dictionaryViaLiteral = new Map<Date, Array<TalkPlan>>;


  speakerNames(speakers : Speaker[]) : string[]{
    return speakers.map(speaker => speaker.name)
  }

  ngOnInit(): void {
    let listToAdd : Array<TalkPlan>=new Array<TalkPlan>();
    this.talkPlans.sort(compareSchedule)
    let date : Date=this.talkPlans[0].schedule;

    for(let i=0;i<this.talkPlans.length;i++) {
      if(this.talkPlans[i].schedule.getFullYear()!=date.getFullYear() || (this.talkPlans[i].schedule.getDate()!=date.getDate() || this.talkPlans[i].schedule.getMonth()!=date.getMonth())  ){
        this.dictionaryViaLiteral.set(date,listToAdd)
        listToAdd=[]
        listToAdd.push(this.talkPlans[i])
        date=this.talkPlans[i].schedule
      }
      else{
        listToAdd.push(this.talkPlans[i])
      }
      if(i+1==this.talkPlans.length){
        this.dictionaryViaLiteral.set(date,listToAdd)
      }
    }
  }
}
