import {AfterViewChecked, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.sass']
})
export class SearchListComponent {
  @Input() list!: any[];
  @Output() searching: EventEmitter<any[]> = new EventEmitter<any[]>();
  filtered: any[] = [];
  searchValue: any;

  search() {
    if (this.searchValue === '') {
      this.filtered = this.list; // when there is nothing to search we display the default list
    } else {
      console.log(this.list)
      this.filtered = this.list.filter(item => {
        return item.name.toLowerCase().includes(this.searchValue.toLowerCase());
      });
    }
    this.searching.emit(this.filtered);
  }

  clear() {
    this.searchValue = '';
    this.search();
  }

}
