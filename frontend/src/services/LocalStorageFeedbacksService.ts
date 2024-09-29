import {Injectable} from '@angular/core';
import {storageKey} from "./LocalStorageFavoriteService";

export const feedbackKey: string = 'feedback-';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageFeedbacksService {

  constructor() {
  }

  addFeedback(id: string, newObject: any): void {
    const serializedObj = JSON.stringify(newObject);
    localStorage.setItem(feedbackKey + id, serializedObj);
  }


  getFeedback(id: string): any {
    const serializedObj = localStorage.getItem(feedbackKey + id);
    if (serializedObj) {
      return JSON.parse(serializedObj); // Convertir le JSON en objet
    }
    return {};
  }

}
