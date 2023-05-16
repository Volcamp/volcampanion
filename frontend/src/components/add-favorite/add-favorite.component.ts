import {Component, EventEmitter, Input, Output} from '@angular/core';
import {OidcSecurityService} from "angular-auth-oidc-client";
import {DataService} from "../../data/services-datas/DataService";
import {VMFavorite} from "../../data/vm/VMFavorite";

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

  constructor(oidcSecurityService: OidcSecurityService, dataService: DataService) {
    this.vm = new VMFavorite(oidcSecurityService, dataService);
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
