import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {getColorTheme} from "../../common/ColorThemeAndTypeEmoji"
import {concatenate} from "../../common/Concatenate"
import {Speaker} from "../../data/dto/input/Speaker";
import {TalkPlanning} from "../../data/dto/input/TalkPlanning";


@Component({
  selector: 'app-talk-teaser-view',
  templateUrl: './talk-teaser-view.component.html',
  styleUrls: ['./talk-teaser-view.component.sass']
})


export class TalkTeaserViewComponent implements OnInit {
  @Input() talkPlanning!: TalkPlanning;
  @Input() inItem: number = 0;
  color: string = '';
  inFavorite: boolean = false;
  startDate = new Date();
  endDate = new Date();
  speakersNames!: string;

  height: number = 0;
  @ViewChild('element1')
  element1!: ElementRef;

  @ViewChild('element2')
  element2!: ElementRef;

  @ViewChild('element3')
  element3!: ElementRef;

  @ViewChild('element4')
  element4!: ElementRef;

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

  onClick(numberFavorite: number) {
    if (!this.talkPlanning.room) return;
    this.talkPlanning.room.capacity = numberFavorite
  }

  ngAfterViewInit() {
    if (this.height <= 0) {
      // @ts-ignore
      setTimeout(_ => this.height = this.element1.nativeElement.offsetHeight + this.element2.nativeElement.offsetHeight +
        this.element3.nativeElement.offsetHeight + this.element4.nativeElement.offsetHeight + 10);
    }
  }

}
