import {Component, Inject} from '@angular/core';
import {Conference} from "../../data/dto/input/Conference";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AbstractConferenceService} from "../../services/abstract/AbstractConferenceService";
import {AbstractSpeakerService} from "../../services/abstract/AbstractSpeakerService";
import {SnackBarService} from "../../services/SnackBarService";
import {Speaker} from "../../data/dto/input/Speaker";
import {CreateSpeaker} from "../../data/dto/output/CreateSpeaker";

@Component({
  selector: 'app-admin-dialog-add-edit-speaker',
  templateUrl: './admin-dialog-add-edit-speaker.component.html',
  styleUrls: ['./admin-dialog-add-edit-speaker.component.sass']
})
export class AdminDialogAddEditSpeakerComponent {

  conferences: Conference[] = [];
  confCurrent!: Conference;
  speaker!: Speaker;

  nameForm: FormControl = new FormControl('', [Validators.required]);
  emailForm: FormControl = new FormControl('', [Validators.required]);
  twitterForm: FormControl = new FormControl('');
  linkedinForm: FormControl = new FormControl('');
  companyForm: FormControl = new FormControl('');
  photoForm: FormControl = new FormControl('');
  biographyForm: FormControl = new FormControl('');

  infoStepper = this._formBuilder.group({
    titleForm: this.nameForm,
    emailForm: this.emailForm,
    twitterForm: this.twitterForm,
    linkedinForm: this.linkedinForm,
    companyForm: this.companyForm,
    photoForm: this.photoForm,
    biographyForm: this.biographyForm,
  });


  confForm: FormControl = new FormControl([], [Validators.required]);
  confStepper = this._formBuilder.group({
    confForm: this.confForm,
  });

  constructor(public dialogRef: MatDialogRef<AdminDialogAddEditSpeakerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private conferenceService: AbstractConferenceService,
              private dataService: AbstractSpeakerService, private _formBuilder: FormBuilder,
              private snackBarService: SnackBarService) {
    conferenceService.getConferences().subscribe(data => {
      this.conferences = data
    })
    this.conferenceService.getCurrentConference().subscribe(conf => {
        this.confCurrent = conf!;
        this.confForm.setValue(conf!);
      }
    )
  }

  ngOnInit() {
    if (this.data !== null) {
      this.speaker = this.data;
      this.nameForm.setValue(this.speaker.name ?? '');
      this.emailForm.setValue(this.speaker.email ?? '');
      this.twitterForm.setValue(this.speaker.twitter ?? '');
      this.linkedinForm.setValue(this.speaker.linkedin ?? '');
      this.companyForm.setValue(this.speaker.company ?? '');
      this.photoForm.setValue(this.speaker.photo ?? '');
      this.biographyForm.setValue(this.speaker.biography ?? '');
      this.confForm.setValue(this.speaker.conference ?? '');
    }
  }

  closeDialog() {
    this.dialogRef.close()
  }

  add() {
    if(this.infoStepper.invalid || this.confStepper.invalid){
      this.snackBarService.open(`Remplissez la formulaire`, "Fermer");
      return;
    }
    const speakerToSend: CreateSpeaker = {
      name: this.nameForm.value,
      email: this.emailForm.value,
      twitter: this.twitterForm.value,
      linkedin: this.linkedinForm.value,
      biography: this.biographyForm.value,
      photo: this.photoForm.value,
      company: this.companyForm.value,
      conference: {
        id: this.confForm.value.id

      }
    }
    if (this.data == null) {
      this.dataService.addSpeaker(speakerToSend).subscribe(data => {
        if (data) {
          this.dialogRef.close();
          this.snackBarService.open(`Le Speaker ${speakerToSend.name} a été ajouter`, "Fermer");
        } else {
          this.snackBarService.open(`Un probleme a survenue`, "Fermer");
        }

      });
    } else {
      this.dataService.putSpeaker(speakerToSend).subscribe(data => {
        if (data) {
          this.dialogRef.close();
          this.snackBarService.open(`Le speaker ${speakerToSend.name} a été modifier`, "Fermer");
        } else {
          this.snackBarService.open(`Un probleme a survenue`, "Fermer");
        }
      });
    }

  }
}
