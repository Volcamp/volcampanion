import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-admin-edit-btn',
  templateUrl: './admin-edit-btn.component.html',
  styleUrls: ['./admin-edit-btn.component.sass']
})
export class AdminEditBtnComponent {
  @Input() item : any;

  @Input() dialogToOpen!: any;

  constructor(public dialog: MatDialog) {
  }

  openDialog() {
    let itemParam = this.item
    const dialogRef = this.dialog.open(this.dialogToOpen, {
      data: { itemParam},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
