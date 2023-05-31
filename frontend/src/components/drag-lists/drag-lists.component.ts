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
export class DragListsComponent implements OnChanges {
  @Input() titleFrom!: string;
  @Input() titleTo!: string;
  @Input() itemDisplayTemplate!: TemplateRef<any>;
  @Input() from: any[] = [];
  fromBackup: any[] = [];

  @Input() to: any[] = [];
  toBackup: any[] = [];

  @Input() itemDisplayPreview!: TemplateRef<any>;


  drop(event: CdkDragDrop<any[]>, isListFrom: boolean) {
    if (event.previousContainer != event.container) {
      if (isListFrom && ! this.toBackup.includes(event.previousContainer.data[event.previousIndex])) {
        console.log("yoooooo")
        transferArrayItem(
          this.toBackup,
          this.fromBackup,
          this.toBackup.indexOf(event.previousContainer.data[event.previousIndex]),
          event.currentIndex,
        );
      } else if(isListFrom && ! this.toBackup.includes(event.previousContainer.data[event.previousIndex])){
        console.log("yoooooo")
        transferArrayItem(
          this.fromBackup,
          this.toBackup,
          this.fromBackup.indexOf(event.previousContainer.data[event.previousIndex]),
          event.currentIndex,
        );
      }
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );


    }
  }


  search(filtered: any[], isListFrom: boolean) {
    if (isListFrom) {
      this.from = filtered;
    } else {
      this.to = filtered;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.from.length > 0) {
      this.from.forEach(item => {
        this.fromBackup.push(item);
      })
    }

    if (this.to.length > 0) {
      this.to.forEach(item => {
        this.toBackup.push(item);
      })
    }
  }
}
