import {Component, EventEmitter, Input, Output} from '@angular/core';
import {VMFavorite} from "../../vm/VMFavorite";
import {UserService} from "../../services/UserService";
import {AbstractTalkFavoriteService} from "../../services/abstract/AbstractTalkFavoriteService";
import {Planning} from "../../data/dto/input/Planning";

@Component({
  selector: 'app-add-favorite',
  templateUrl: './add-favorite.component.html',
  styleUrls: ['./add-favorite.component.sass']
})
export class AddFavoriteComponent {

  @Output() capacityChange: EventEmitter<number> = new EventEmitter<number>();

  @Input() capacity: number = 0;
  @Input() planning!: Planning;
  vm!: VMFavorite;

  constructor(private userService: UserService, private abstractTalkFavoriteService: AbstractTalkFavoriteService) {

  }

  ngOnInit() {
    this.vm = new VMFavorite(this.userService, this.abstractTalkFavoriteService, this.planning,this.capacity,this.capacityChange);
  }

  removeFavorite(event: Event) {
    event.stopPropagation();
    this.vm.removeFavorite();
  }

  addFavorite(event: Event) {
    event.stopPropagation();
    this.vm.addFavorite();
  }
}
