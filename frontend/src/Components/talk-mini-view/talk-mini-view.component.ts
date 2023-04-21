import {Component, Input, OnInit} from '@angular/core';
import {getColorTheme} from "../../GeneralVolcamp/ColorThemeAndTypeEmoji"
import {contanecationMot} from "../../GeneralVolcamp/contanecationMot"
import {Speaker} from "../../Data/DTO/Speaker";
import {TalkPlan} from "../../Data/DTO/TalkPlan";
import {Plan} from "../../Data/DTO/Plan";


@Component({
  selector: 'app-talk-mini-view',
  templateUrl: './talk-mini-view.component.html',
  styleUrls: ['./talk-mini-view.component.sass']
})


export class TalkMiniViewComponent implements OnInit{
  @Input() isConnected:boolean=true
  @Input() talkPlan!: TalkPlan;



  color : string =''
  inFavorite: boolean=false
  startDate = new Date();
  endDate = new Date();
  speakersNames!: string;


  speakerNames(speakers : Speaker[] | undefined) : string[]{
    if(speakers==undefined) return []
    return speakers.map(speaker => speaker.name)
  }

  ngOnInit(): void {
    this.color=getColorTheme(this.talkPlan.talk.theme.name)
    this.speakersNames= contanecationMot(this.speakerNames(this.talkPlan.talk.speakers))
    this.startDate=new Date(this.talkPlan.schedule)

    this.endDate=new Date(this.startDate.getTime() + this.talkPlan.talk.format.duration *60000)

  }

  removeFavorite() {
    this.talkPlan.room.capacity--
    //faire la requete
    this.inFavorite=false
  }

  addFavorite() {
    this.talkPlan.room.capacity++
    this.inFavorite=true

  }
}
