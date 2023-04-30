import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-add-favorite',
  templateUrl: './add-favorite.component.html',
  styleUrls: ['./add-favorite.component.sass']
})
export class AddFavoriteComponent {
  @Output() capacityChange: EventEmitter<number> = new EventEmitter<number>();
  @Input() inFavorite: boolean = false
  @Input() capacity: number = 0

  removeFavorite(event: Event) {
    event.stopPropagation()
    this.capacityChange.emit(--this.capacity)
    //faire la requete
    this.inFavorite = false
  }

  addFavorite(event: Event) {
    event.stopPropagation()
    this.capacityChange.emit(++this.capacity)
    this.inFavorite = true
  }
}
