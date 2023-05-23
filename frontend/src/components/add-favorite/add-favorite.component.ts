import {Component, EventEmitter, Input, Output} from '@angular/core';
import {VMFavorite} from "../../vm/VMFavorite";
import {UserService} from "../../services/UserService";
import {AbstractTalkFavoriteService} from "../../services/AbstractTalkFavoriteService";

@Component({
  selector: 'app-add-favorite',
  templateUrl: './add-favorite.component.html',
  styleUrls: ['./add-favorite.component.sass']
})
export class AddFavoriteComponent {

  @Output() capacityChange: EventEmitter<number> = new EventEmitter<number>();

  @Input() capacity: number = 0;
  @Input() talkId: number = 0;
  vm: VMFavorite;

  constructor(userService: UserService, abstractTalkFavoriteService: AbstractTalkFavoriteService) {
    this.vm = new VMFavorite(userService, abstractTalkFavoriteService);
  }

  removeFavorite(event: Event) {
    event.stopPropagation();
    this.capacityChange.emit(--this.capacity);
    this.vm.removeFavorite(this.talkId);
  }

  addFavorite(event: Event) {
    event.stopPropagation();
    this.capacityChange.emit(++this.capacity);
    this.vm.addFavorite(this.talkId);
  }
}
