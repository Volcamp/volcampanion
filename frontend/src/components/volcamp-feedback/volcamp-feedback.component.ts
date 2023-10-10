import {Component, Input} from '@angular/core';
import {VMFeedbackTalk} from "../../vm/VMFeedbackTalk";
import {UserService} from "../../services/UserService";
import {AbstractTalkFeedbackService} from "../../services/abstract/AbstractTalkFeedbackService";
import {FeedbackInitService} from "../../services/FeedbackInitService";

@Component({
  selector: 'app-volcamp-feedback',
  templateUrl: './volcamp-feedback.component.html',
  styleUrls: ['./volcamp-feedback.component.sass']
})
// TODO handle delete its own feedback with button
export class VolcampFeedbackComponent {
  vm!: VMFeedbackTalk;
  @Input() talkId: string = ''


  constructor(private userService: UserService, private dataService: AbstractTalkFeedbackService, private feedbackInitService: FeedbackInitService,) {
  }

  ngOnInit() {
    this.vm = new VMFeedbackTalk(this.userService, this.dataService, this.feedbackInitService, this.talkId);
  }
}
