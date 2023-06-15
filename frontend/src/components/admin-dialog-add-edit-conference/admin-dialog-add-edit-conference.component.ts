import {Component, Inject} from '@angular/core';
import {Conference} from "../../data/dto/input/Conference";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AbstractConferenceService} from "../../services/abstract/AbstractConferenceService";
import {SnackBarService} from "../../services/SnackBarService";
import {CreateConference} from "../../data/dto/output/CreateConference";

@Component({
  selector: 'app-admin-dialog-add-edit-conference',
  templateUrl: './admin-dialog-add-edit-conference.component.html',
  styleUrls: ['./admin-dialog-add-edit-conference.component.sass']
})
export class AdminDialogAddEditConferenceComponent {
  conference!: Conference;

  nameForm: FormControl = new FormControl('', [Validators.required]);
  range = new FormGroup({
    start: new FormControl<Date>(new Date(),[Validators.required]),
    end: new FormControl<Date>(new Date(),[Validators.required]),
  },[Validators.required]);

  infoStepper = this._formBuilder.group({
    titleForm: this.nameForm,
    rangeForm : this.range,
  });

  constructor(public dialogRef: MatDialogRef<AdminDialogAddEditConferenceComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private dataService: AbstractConferenceService,
              private _formBuilder: FormBuilder, private snackBarService: SnackBarService) {

  }

  ngOnInit() {
    if (this.data !== null) {
      this.conference = this.data;
      this.nameForm.setValue(this.conference.name ?? '');
      this.range.controls.start.setValue(this.conference.startDate!);
      this.range.controls.end.setValue(this.conference.endDate!);

    }
  }

  closeDialog() {
    this.dialogRef.close()
  }

  add() {
    if(this.infoStepper.invalid){
      this.snackBarService.open(`Remplissez la formulaire`, "Fermer");
      return;
    }
    const conferenceToSend: CreateConference = {
      name: this.nameForm.value,
      startDate: this.range.value.start!,
      endDate:  this.range.value.end!,
    }
    if (this.data == null) {
      this.dataService.addConference(conferenceToSend).subscribe(data => {
        if (data) {
          this.dialogRef.close();
          this.snackBarService.open(`Le Conference ${conferenceToSend.name} a été ajouter`, "Fermer");
        } else {
          this.snackBarService.open(`Un probleme a survenue`, "Fermer");
        }

      });
    } else {
      this.dataService.putConference(conferenceToSend).subscribe(data => {
        if (data) {
          this.dialogRef.close();
          this.snackBarService.open(`Le conference ${conferenceToSend.name} a été modifier`, "Fermer");
        } else {
          this.snackBarService.open(`Un probleme a survenue`, "Fermer");
        }
      });
    }

  }
}
