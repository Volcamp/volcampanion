import {Injectable} from "@angular/core";
import {EventEmitter} from "../event/EventEmitter";
import {FeedbackTalkInitEvent} from "../event/FeedbackTalkInitEvent";
import {NoteChangeEvent} from "../event/NoteChangeEvent";

@Injectable()
export class FeedbackInitService {
  eventEmitterFeedback : EventEmitter<FeedbackTalkInitEvent> = new EventEmitter<FeedbackTalkInitEvent>(FeedbackTalkInitEvent) ;
  eventEmitterNote : EventEmitter<NoteChangeEvent> = new EventEmitter<NoteChangeEvent>(NoteChangeEvent) ;

}
