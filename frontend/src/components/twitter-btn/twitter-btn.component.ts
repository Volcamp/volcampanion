import {Component, Input, OnInit} from '@angular/core';
import {SocialMedia} from "../../common/SocialMedia";

@Component({
  selector: 'app-twitter-btn',
  templateUrl: './twitter-btn.component.html',
  styleUrls: ['./twitter-btn.component.sass']
})
export class TwitterBtnComponent implements OnInit {
  @Input() userId!: string;
  visible: boolean = false;
  twitter = SocialMedia.TWITTER
  twitterLink = SocialMedia.TWITTER_LINK

  ngOnInit(): void {
    this.userId = this.userId.replace(this.twitterLink, "");
    this.visible = this.userId != '';
  }
}
