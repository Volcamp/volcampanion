import {
  AfterContentInit,
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef
} from '@angular/core';
import {CdkDragDrop, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-drag-lists',
  templateUrl: './drag-lists.component.html',
  styleUrls: ['./drag-lists.component.sass']
})
export class DragListsComponent{
  @Input() titleFrom!: string;
  @Input() titleTo!: string;
  @Input() from: any[] = [];
  @Input() to: any[] = [];
  @Input() itemDisplayTemplate!: TemplateRef<any>;
  @Input() itemDisplayPreview!: TemplateRef<any>;

  searchValueFrom: string = "";
  searchValueTo: string = "";

  drop(event: CdkDragDrop<any[]>, isListDroppedFrom: boolean) {
    if (event.previousContainer != event.container) {
      if (isListDroppedFrom && !this.from.includes(event.previousContainer.data[event.previousIndex])) {
        transferArrayItem(
          this.to,
          this.from,
          this.to.indexOf(event.previousContainer.data[event.previousIndex]),
          event.currentIndex,
        );
      } else if (!isListDroppedFrom && !this.to.includes(event.previousContainer.data[event.previousIndex])) {
        transferArrayItem(
          this.from,
          this.to,
          this.from.indexOf(event.previousContainer.data[event.previousIndex]),
          event.currentIndex,
        );
      }
    }
  }

  clearFrom() {
    this.searchValueFrom = '';
  }

  clearTo() {
    this.searchValueTo = '';
  }

}
