import {Component, Input, OnInit} from '@angular/core';
import {getColorTheme} from "../../GeneralVolcamp/ColorThemeAndTypeEmoji"
@Component({
  selector: 'app-talk-mini-view',
  templateUrl: './talk-mini-view.component.html',
  styleUrls: ['./talk-mini-view.component.sass']
})


export class TalkMiniViewComponent implements OnInit{
  @Input() title = '';
  @Input() type = '';
  color : String =''
  @Input() speakers: string[] = [] ;
  @Input() conference = '';
  @Input() startDate = new Date();
  @Input() endDate = new Date();
  @Input() nbFavorite = 0;

  ngOnInit(): void {
    this.color=getColorTheme(this.type)
  }

}
