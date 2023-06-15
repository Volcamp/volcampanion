import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SnackBarService} from "../../services/SnackBarService";
import {AbstractConferenceService} from "../../services/abstract/AbstractConferenceService";

@Component({
  selector: 'app-admin-dialog-delete-conference',
  templateUrl: './admin-dialog-delete-conference.component.html',
  styleUrls: ['./admin-dialog-delete-conference.component.sass']
})
export class AdminDialogDeleteConferenceComponent {
  constructor(
    public dialogRef: MatDialogRef<AdminDialogDeleteConferenceComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBarService: SnackBarService, private dataService: AbstractConferenceService
  ) {
  }


  closeDialog() {
    this.dialogRef.close()
  }

  delete() {
    this.dataService.deleteConference(this.data.idParam).subscribe(data => {
      if (data) {
        this.snackBarService.open(`Le Speaker ${this.data.nameParam} a été supprimer`, 'Fermer')
        this.dialogRef.close()
      } else {
        this.snackBarService.open(`Un probleme a survenue`, "Fermer");
      }

    });

  }
}
