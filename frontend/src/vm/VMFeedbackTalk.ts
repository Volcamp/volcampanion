import {UserService} from "../services/UserService";
import {Feedback} from "../data/dto/input/Feedback";
import {AbstractTalkFeedbackService} from "../services/abstract/AbstractTalkFeedbackService";
import {FeedbackInitService} from "../services/FeedbackInitService";
import {LocalStorageFeedbacksService} from "../services/LocalStorageFeedbacksService";
import {NoteChangeEventArgs} from "../event/NoteChangeEventArgs";


export class VMFeedbackTalk {
  logged: boolean;
  feedBack: Feedback = {comment: "", rating: -1};
  idTalk!: string;
  noted: boolean = false;

  constructor(private userService: UserService, private dataService: AbstractTalkFeedbackService,
              private feedbackInitService: FeedbackInitService, private talkId: string,
              private localStorageFeedbacksService: LocalStorageFeedbacksService) {
    this.logged = userService.isLogged();
    this.init(talkId);
  }

  private init(idTalk: string) {
    this.idTalk = idTalk;
    const res = this.localStorageFeedbacksService.getFeedback(idTalk);
    if (res["comment"] || res["rating"]) {
      this.feedBack = res;
      this.noted = true;
    }
  }

  update(note: number) {
    this.feedBack.rating = note;
  }

  sendNote() {
    this.localStorageFeedbacksService.addFeedback(this.idTalk, this.feedBack);
    //TODO send also to backend
    this.noted = true;
  }

  // setFeedback(feedback: Feedback) {
  //   this.feedBack = feedback;
  //   this.noted = true;
  //   if (feedback == null) {
  //     this.feedBack = new EmptyFeedback();
  //     this.noted = false;
  //   }
  // }

}
