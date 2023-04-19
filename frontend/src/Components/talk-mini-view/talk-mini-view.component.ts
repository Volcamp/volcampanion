import {Component, Input, OnInit} from '@angular/core';
import {getColorTheme} from "../../GeneralVolcamp/ColorThemeAndTypeEmoji"
import {contanecationMot} from "../../GeneralVolcamp/contanecationMot"


@Component({
  selector: 'app-talk-mini-view',
  templateUrl: './talk-mini-view.component.html',
  styleUrls: ['./talk-mini-view.component.sass']
})


export class TalkMiniViewComponent implements OnInit{
  @Input() title = '';
  @Input() type = '';
  color : string =''
  inFavorite: boolean=false
  @Input() isConnected:boolean=true
  @Input() speakers: string[] = [] ;
  @Input() hall = '';
  @Input() startDate = new Date();
  endDate = new Date();
  @Input() duration! : number;
  @Input() nbFavorite = 0;
  speakersNames!: string;

  ngOnInit(): void {
    this.color=getColorTheme(this.type)
    this.speakersNames= contanecationMot(this.speakers)

    this.endDate=new Date(this.startDate.getTime() + this.duration *60000)


  }

  removeFavorite() {
    this.nbFavorite--
    //faire la requete
    this.inFavorite=false
  }

  addFavorite() {
    this.nbFavorite++
    this.inFavorite=true

  }
}
