import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SnackBarService} from "../../services/SnackBarService";
import {AbstractSpeakerService} from "../../services/abstract/AbstractSpeakerService";

@Component({
  selector: 'app-admin-dialog-delete-speaker',
  templateUrl: './admin-dialog-delete-speaker.component.html',
  styleUrls: ['./admin-dialog-delete-speaker.component.sass']
})
export class AdminDialogDeleteSpeakerComponent {
  constructor(
    public dialogRef: MatDialogRef<AdminDialogDeleteSpeakerComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBarService: SnackBarService, private dataService: AbstractSpeakerService
  ) {
  }


  closeDialog() {
    this.dialogRef.close()
  }

  delete() {
    this.dataService.deleteSpeaker(this.data.idParam).subscribe(data => {
      if (data) {
        this.snackBarService.open(`Le Speaker ${this.data.nameParam} a été supprimer`, 'Fermer')
        this.dialogRef.close()
      } else {
        this.snackBarService.open(`Un probleme a survenue`, "Fermer");
      }

    });

  }

}
