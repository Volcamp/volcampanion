import {UserService} from "../services/UserService";
import {LogEventArgs} from "../event/LogEventArgs";
import {Feedback} from "../data/dto/input/Feedback";
import {AbstractTalkFeedbackService} from "../services/abstract/AbstractTalkFeedbackService";
import {FeedbackInitService} from "../services/FeedbackInitService";
import {NoteChangeEventArgs} from "../event/NoteChangeEventArgs";
import {EmptyFeedback} from "../data/dto/input/EmptyFeedback";


export class VMFeedbackTalk {
  logged: boolean;
  feedBack: Feedback = {comment: "", rating: -1};
  idTalk!: string;
  noted: boolean = false;

  constructor(private userService: UserService, private dataService: AbstractTalkFeedbackService,
              private feedbackInitService: FeedbackInitService, private talkId: string) {
    this.logged = userService.isLogged();
    this.init(talkId);
  }

  private init(idTalk: string) {
    this.idTalk = idTalk;
    this.userService.logEventEmitter.on((data: LogEventArgs) => {
      this.logged = data.IsLog
    });
    if (this.logged) {
      this.dataService.getFeedback(this.idTalk).subscribe(data => {
        if (data.length != 0) {
          // this.feedBack = data[0];
          this.feedbackInitService.eventEmitterNote.emit(new NoteChangeEventArgs(this.feedBack.rating))

          // this.noted = true;
        } else {
          // this.noted = false;
        }

      });
    }
  }

  update(note: number) {
    this.feedBack.rating = note;
  }

  sendNote() {
    this.dataService.addFeedback(this.feedBack, this.idTalk).subscribe(data => {
      this.noted = data;
    });

  }

  setFeedback(feedback: Feedback) {
    this.feedBack = feedback;
    this.noted = true;
    if (feedback == null) {
      this.feedBack = new EmptyFeedback();
      this.noted = false;
    }
  }

  deleteFeedback() {
    this.dataService.removeFeedback(this.idTalk).subscribe(() => {
      this.noted = false;
    });
  }
}
