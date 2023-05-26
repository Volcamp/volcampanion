import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {AbstractThemeService} from "../../services/abstract/AbstractThemeService";
import {AbstractFormatService} from "../../services/abstract/AbstractFormatService";
import {Format} from "../../data/dto/input/Format";
import {Theme} from "../../data/dto/input/Theme";
import {AbstractConferenceService} from "../../services/abstract/AbstractConferenceService";
import {Conference} from "../../data/dto/input/Conference";
import {AbstractSpeakerService} from "../../services/abstract/AbstractSpeakerService";
import {Speaker} from "../../data/dto/input/Speaker";

@Component({
  selector: 'app-admin-dialog-add-talk',
  templateUrl: './admin-dialog-add-talk.component.html',
  styleUrls: ['./admin-dialog-add-talk.component.sass']
})
export class AdminDialogAddTalkComponent {
  formats: Format[] = [];
  themes: Theme[] = [];
  conferences: Conference[] = [];
  speakers: Speaker[] = [];
  speakersToAdd: Speaker[] = [];

  titleForm: FormControl = new FormControl('', [Validators.required]);

  firstStepper = this._formBuilder.group({
    titleForm: this.titleForm,
  });

  constructor(public dialogRef: MatDialogRef<AdminDialogAddTalkComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              private themeService: AbstractThemeService, private formatService: AbstractFormatService,
              private conferenceService: AbstractConferenceService, private dataService: AbstractSpeakerService,
              private _formBuilder: FormBuilder) {
    this.conferenceService.getCurrentConference().subscribe(conf => {
        this.dataService.getSpeakers(conf!.id.toString()).subscribe((speakers => {
          this.speakers = speakers
        }))
      }
    )

    formatService.getFormats().subscribe(data => {
      this.formats = data
    })

    themeService.getThemes().subscribe(data => {
      this.themes = data
    })

    conferenceService.getConferences().subscribe(data => {
      this.conferences = data
    })


  }

  closeDialog() {
    this.dialogRef.close()
  }

  add() {
    console.log(this.titleForm.value)
    console.log(this.speakersToAdd)

  }

}
