import {Injectable} from '@angular/core';
import {DividerPlanning} from "../data/dto/input/DividerPlanning";

export const storageKey: string = 'favorites';
export const datesKey: string = 'dates';
export const daysKey: string = 'days';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageFavoriteService {

  constructor() {
  }

  // Méthode pour ajouter un élément à la liste d'objets dans le localStorage
  addFavoriteToList(newObject: any): void {
    let objectList = this.getFavoriteList();
    objectList = objectList.filter(obj => obj?.talk?.id !== newObject?.talk.id);
    if (objectList.length === 0) {
      let days = this.getDaysList();
      if (days.length > 0) {
        days.forEach(elt => {
          objectList.push(new DividerPlanning(new Date(elt.schedule)));
        })
      }
    }
    objectList.push(newObject); // Ajouter le nouvel objet à la liste
    this.setFavoriteList(objectList); // Mettre à jour la liste dans le localStorage
  }

  // Méthode pour supprimer un élément de la liste d'objets dans le localStorage
  removeFavoriteFromList(objectToRemove: any): void {
    let objectList = this.getFavoriteList();

    // Filtrer la liste pour supprimer l'objet correspondant
    objectList = objectList.filter(obj => obj?.talk?.id !== objectToRemove?.talk.id);
    if (objectList.length === this.getDaysList().length) {
      objectList = [];
    }

    this.setFavoriteList(objectList); // Mettre à jour la liste dans le localStorage
  }

  // Méthode pour stocker une liste d'objets dans le localStorage
  setFavoriteList(objectList: any[]): void {
    const serializedList = JSON.stringify(objectList); // Convertir la liste d'objets en JSON
    localStorage.setItem(storageKey, serializedList); // Stocker la liste dans le localStorage
  }

  // Méthode pour récupérer la liste d'objets depuis le localStorage
  getFavoriteList(): any[] {
    const serializedList = localStorage.getItem(storageKey); // Récupérer la liste depuis le localStorage
    if (serializedList) {
      return JSON.parse(serializedList); // Convertir le JSON en tableau d'objets
    }
    return []; // Retourne une liste vide si aucune donnée n'est trouvée
  }

  setDaysList(objectList: any[]): void {
    const serializedList = JSON.stringify(objectList); // Convertir la liste d'objets en JSON
    localStorage.setItem(daysKey, serializedList); // Stocker la liste dans le localStorage
  }

  // Méthode pour récupérer la liste d'objets depuis le localStorage
  getDaysList(): any[] {
    const serializedList = localStorage.getItem(daysKey); // Récupérer la liste depuis le localStorage
    if (serializedList) {
      return JSON.parse(serializedList); // Convertir le JSON en tableau d'objets
    }
    return []; // Retourne une liste vide si aucune donnée n'est trouvée
  }

  setDatesList(objectList: any[]): void {
    const serializedList = JSON.stringify(objectList); // Convertir la liste d'objets en JSON
    localStorage.setItem(datesKey, serializedList); // Stocker la liste dans le localStorage
  }

  // Méthode pour récupérer la liste d'objets depuis le localStorage
  getDatesList(): any[] {
    const serializedList = localStorage.getItem(datesKey); // Récupérer la liste depuis le localStorage
    if (serializedList) {
      return JSON.parse(serializedList); // Convertir le JSON en tableau d'objets
    }
    return []; // Retourne une liste vide si aucune donnée n'est trouvée
  }

  // Méthode pour supprimer la liste du localStorage
  clearObjectList(): void {
    localStorage.removeItem(storageKey); // Supprimer la clé associée dans le localStorage
    localStorage.removeItem(datesKey); // Supprimer la clé associée dans le localStorage
    localStorage.removeItem(daysKey); // Supprimer la clé associée dans le localStorage
  }
}
