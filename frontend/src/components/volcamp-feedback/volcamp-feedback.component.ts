import {Component} from '@angular/core';
import {VMFeedbackTalk} from "../../vm/VMFeedbackTalk";
import {UserService} from "../../services/UserService";
import {AbstractTalkFeedbackService} from "../../services/abstract/AbstractTalkFeedbackService";
import {FeedbackInitService} from "../../services/FeedbackInitService";

@Component({
  selector: 'app-volcamp-feedback',
  templateUrl: './volcamp-feedback.component.html',
  styleUrls: ['./volcamp-feedback.component.sass']
})
export class VolcampFeedbackComponent {
  vm!: VMFeedbackTalk;
  idTalk!: string;

  constructor(userService: UserService, dataService: AbstractTalkFeedbackService, feedbackInitService: FeedbackInitService,) {
    this.vm = new VMFeedbackTalk(userService, dataService, feedbackInitService);
  }
}
