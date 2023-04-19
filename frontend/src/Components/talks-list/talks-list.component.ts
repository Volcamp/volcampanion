import {Component, Input, OnInit} from '@angular/core';
import {Talk} from "../../Data/DTO/Talk"
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
      console.log(this.talkPlans[i].talk.title)
      console.log(this.talkPlans[i].schedule.getDate()+"/"+(this.talkPlans[i].schedule.getMonth()+1)+"/"+this.talkPlans[i].schedule.getFullYear())
      console.log(date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear())
      if(this.talkPlans[i].schedule!=date ){
        this.dictionaryViaLiteral.set(date,listToAdd)
        console.log("i pushed"+i)
        listToAdd=[]
        listToAdd.push(this.talkPlans[i])
        date=this.talkPlans[i].schedule
      }
      else{
        console.log("i passed"+i)
        listToAdd.push(this.talkPlans[i])
      }
      if(i+1==this.talkPlans.length){
        console.log("i finished"+i)

        this.dictionaryViaLiteral.set(date,listToAdd)
      }

      console.log("----------------------------")
    }
    for(let i of this.dictionaryViaLiteral){
      console.log("hey :"+i)

    }
  }

}
