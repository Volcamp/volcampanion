import {Component, Input} from '@angular/core';
import {VMFeedbackTalk} from "../../vm/VMFeedbackTalk";
import {UserService} from "../../services/UserService";
import {AbstractTalkFeedbackService} from "../../services/abstract/AbstractTalkFeedbackService";
import {FeedbackInitService} from "../../services/FeedbackInitService";
import {Feedback} from "../../data/dto/input/Feedback";
import {LocalStorageFeedbacksService} from "../../services/LocalStorageFeedbacksService";

@Component({
  selector: 'app-volcamp-feedback',
  templateUrl: './volcamp-feedback.component.html',
  styleUrls: ['./volcamp-feedback.component.sass']
})
// TODO handle delete its own feedback with button
export class VolcampFeedbackComponent {
  vm!: VMFeedbackTalk;
  @Input() talkId: string = ''
  @Input() feedback: Feedback | null = null

  currentNote: number = 5

  constructor(private userService: UserService, private dataService: AbstractTalkFeedbackService, private feedbackInitService: FeedbackInitService, private localStorageFeedbacksService: LocalStorageFeedbacksService,) {
  }

  ngOnInit() {
    this.vm = new VMFeedbackTalk(this.userService, this.dataService, this.feedbackInitService, this.talkId, this.localStorageFeedbacksService);
    if (this.vm.feedBack.rating > 0) {
      this.currentNote = this.vm.feedBack.rating;
    }
  }
}
