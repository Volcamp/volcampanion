import {Component, Input} from '@angular/core';
import {SocialMedia} from "../../general-volcamp/SocialMedia";

@Component({
  selector: 'app-linkedin-btn',
  templateUrl: './linkedin-btn.component.html',
  styleUrls: ['./linkedin-btn.component.sass']
})
export class LinkedinBtnComponent {
  @Input() userId!: string;
  linkedin = SocialMedia.LINKEDIN
  linkedinLink = SocialMedia.LINKEDIN_LINK

  ngOnInit(): void {
    this.userId = this.userId.replace(this.linkedinLink, "")
  }

}
