import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-admin-add-btn',
  templateUrl: './admin-add-btn.component.html',
  styleUrls: ['./admin-add-btn.component.sass']
})
export class AdminAddBtnComponent {
  @Input() dialogToOpen!: any;

  constructor(public dialog: MatDialog) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(this.dialogToOpen);

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
