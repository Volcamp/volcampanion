import {Component, Input} from '@angular/core';
import {Speaker} from "../../data/dto/Speaker";
import {SocialMedia} from "../../common/SocialMedia";

@Component({
  selector: 'app-speaker-teaser-view',
  templateUrl: './speaker-teaser-view.component.html',
  styleUrls: ['./speaker-teaser-view.component.sass']
})
export class SpeakerTeaserViewComponent {
  @Input() speaker!: Speaker;
  twitter = SocialMedia.TWITTER
  linkedin = SocialMedia.LINKEDIN
}
