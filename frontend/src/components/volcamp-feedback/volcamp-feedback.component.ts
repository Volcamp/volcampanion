import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {VMFeedbackTalk} from "../../vm/VMFeedbackTalk";
import {UserService} from "../../services/UserService";
import {AbstractTalkFeedbackService} from "../../services/abstract/AbstractTalkFeedbackService";
import {FeedbackInitService} from "../../services/FeedbackInitService";
import {Feedback} from "../../data/dto/input/Feedback";
import {LocalStorageFeedbacksService} from "../../services/LocalStorageFeedbacksService";
import {Talk} from "../../data/dto/input/Talk";

@Component({
  selector: 'app-volcamp-feedback',
  templateUrl: './volcamp-feedback.component.html',
  styleUrls: ['./volcamp-feedback.component.sass']
})
// TODO handle delete its own feedback with button
export class VolcampFeedbackComponent implements OnChanges {
  vm!: VMFeedbackTalk;
  @Input() talkId: string = ''
  @Input() feedback: Feedback | null = null
  @Input() talk: Talk | null | undefined = null
  
  openFeedbackUrl: string | null | undefined = null
  currentNote: number = 5

  constructor(private userService: UserService, private dataService: AbstractTalkFeedbackService, private feedbackInitService: FeedbackInitService, private localStorageFeedbacksService: LocalStorageFeedbacksService,) {
  }

  ngOnInit() {
    this.vm = new VMFeedbackTalk(this.userService, this.dataService, this.feedbackInitService, this.talkId, this.localStorageFeedbacksService);
    if (this.vm.feedBack.rating > 0) {
      this.currentNote = this.vm.feedBack.rating;
    }
    
    // Initialiser openFeedbackUrl si talk est déjà disponible
    if (this.talk) {
      this.openFeedbackUrl = this.talk.openFeedbackUrl;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // Mettre à jour openFeedbackUrl quand talk change
    if (changes['talk'] && this.talk) {
      this.openFeedbackUrl = this.talk.openFeedbackUrl;
    }
  }
}
