import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LocalStorageFavoriteService} from "../../services/LocalStorageFavoriteService";
import {TalkPlanning} from "../../data/dto/input/TalkPlanning";

@Component({
  selector: 'app-add-favorite',
  templateUrl: './add-favorite.component.html',
  styleUrls: ['./add-favorite.component.sass']
})
export class AddFavoriteComponent {

  @Output() capacityChange: EventEmitter<number> = new EventEmitter<number>();

  @Input() capacity: number = 0;
  @Input() planning!: TalkPlanning;

  inFavorite: boolean = false;

  constructor(private localStorageFavoriteService: LocalStorageFavoriteService) {

  }

  ngOnInit() {
    let favorites = this.localStorageFavoriteService.getFavoriteList();
    this.inFavorite = favorites.filter(obj => obj?.talk?.id === this.planning?.talk.id).length > 0;
  }

  removeFavorite(event: Event) {
    event.stopPropagation();
    this.localStorageFavoriteService.removeFavoriteFromList(this.planning);
    this.inFavorite = false;
  }

  addFavorite(event: Event) {
    event.stopPropagation();
    this.localStorageFavoriteService.addFavoriteToList(this.planning);
    this.inFavorite = true;
  }
}
