import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SnackBarService} from "../../services/SnackBarService";
import {AbstractTalkService} from "../../services/abstract/AbstractTalkService";

@Component({
  selector: 'app-admin-dialog-delete-talk',
  templateUrl: './admin-dialog-delete-talk.component.html',
  styleUrls: ['./admin-dialog-delete-talk.component.sass']
})
export class AdminDialogDeleteTalkComponent {
  constructor(
    public dialogRef: MatDialogRef<AdminDialogDeleteTalkComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBarService : SnackBarService, private dataService : AbstractTalkService
  ) { }


  closeDialog() {
    this.dialogRef.close()
  }

  delete() {
    this.dataService.deleteTalk(this.data.idParam).subscribe(data => {
      if(data) {
        this.snackBarService.open(`Le talk ${this.data.nameParam} a été supprimer`, 'Fermer')
        this.dialogRef.close()
      }else {
        this.snackBarService.open(`Un probleme a survenue`, "Fermer");
      }

    });

  }
}
