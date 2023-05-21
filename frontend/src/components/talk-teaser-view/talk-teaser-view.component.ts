import {Component, Input, OnInit} from '@angular/core';
import {getColorTheme} from "../../common/ColorThemeAndTypeEmoji"
import {concatenate} from "../../common/Concatenate"
import {Speaker} from "../../data/dto/Speaker";
import {TalkPlanning} from "../../data/dto/TalkPlanning";


@Component({
  selector: 'app-talk-teaser-view',
  templateUrl: './talk-teaser-view.component.html',
  styleUrls: ['./talk-teaser-view.component.sass']
})


export class TalkTeaserViewComponent implements OnInit {
  @Input() isConnected: boolean = true
  @Input() talkPlanning!: TalkPlanning;

  color: string = ''
  inFavorite: boolean = false
  startDate = new Date();
  endDate = new Date();
  speakersNames!: string;

  speakerNames(speakers: Speaker[] | undefined): string[] {
    if (speakers === undefined) {
      return []
    }
    return speakers.map(speaker => speaker.name)
  }

  ngOnInit(): void {
    this.color = getColorTheme(this.talkPlanning.talk.theme.name)
    this.speakersNames = concatenate(this.speakerNames(this.talkPlanning.talk.speakers))
    this.startDate = new Date(this.talkPlanning.schedule)
    this.endDate = new Date(this.startDate.getTime() + this.talkPlanning.talk.format.duration * 1000) //if in minutes need to be 60 000
  }

  removeFavorite() {
    this.talkPlanning.room.capacity--
    //faire la requete
    this.inFavorite = false
  }

  addFavorite() {
    this.talkPlanning.room.capacity++
    this.inFavorite = true

  }

  onClick(numberFavorite: number) {
    this.talkPlanning.room.capacity = numberFavorite
  }
}
