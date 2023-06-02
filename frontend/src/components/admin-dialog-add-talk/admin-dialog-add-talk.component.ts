import {Component, Inject, OnInit} from '@angular/core';
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
import {map, Observable, startWith} from "rxjs";
import {CreateTalk} from "../../data/dto/output/CreateTalk";
import {AbstractTalkService} from "../../services/abstract/AbstractTalkService";
import {SnackBarService} from "../../services/SnackBarService";

@Component({
  selector: 'app-admin-dialog-add-talk',
  templateUrl: './admin-dialog-add-talk.component.html',
  styleUrls: ['./admin-dialog-add-talk.component.sass'],

})
export class AdminDialogAddTalkComponent implements OnInit {
  formats: Format[] = [];
  themes: Theme[] = [];
  conferences: Conference[] = [];
  speakers: Speaker[] = [];
  speakersToAdd: Speaker[] = [];
  numberOfSteps = 0;
  confCurrent!: Conference;


  titleForm: FormControl = new FormControl('', [Validators.required]);
  levelForm: FormControl = new FormControl('', [Validators.required]);
  languageForm: FormControl = new FormControl('', [Validators.required]);
  descriptionForm: FormControl = new FormControl('');

  infoStepper = this._formBuilder.group({
    titleForm: this.titleForm,
    levelForm: this.levelForm,
    languageForm: this.languageForm,
  });


  filteredOptions!: Observable<string[]>;
  filteredLanguageOptions: string[] = ["french", 'english'];

  themeForm: FormControl = new FormControl([], [Validators.required]);
  themeStepper = this._formBuilder.group({
    themeForm: this.themeForm,
  });


  formatForm: FormControl = new FormControl([], [Validators.required]);
  formatStepper = this._formBuilder.group({
    formatForm: this.formatForm,
  });

  confForm: FormControl = new FormControl([], [Validators.required]);
  confStepper = this._formBuilder.group({
    confForm: this.confForm,
  });

  constructor(public dialogRef: MatDialogRef<AdminDialogAddTalkComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              private themeService: AbstractThemeService, private formatService: AbstractFormatService,
              private conferenceService: AbstractConferenceService, private dataService: AbstractSpeakerService,
              private abstractTalkService: AbstractTalkService, private _formBuilder: FormBuilder,
              private snackBarService: SnackBarService) {
    this.conferenceService.getCurrentConference().subscribe(conf => {
        this.confCurrent = conf!;
        this.confForm.setValue(conf!);
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

  ngOnInit() {
    this.filteredOptions = this.languageForm.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    if (this.data !== null) {
      this.titleForm.setValue(this.data.title ?? '');
      this.levelForm.setValue(this.data.level ?? '');
      this.languageForm.setValue(this.data.language ?? '');
      this.descriptionForm.setValue(this.data.description ?? '');
      this.themeForm.setValue(this.data.theme ?? '');
      this.formatForm.setValue(this.data.format ?? '');
      this.confForm.setValue(this.data.conference ?? '');
      this.speakersToAdd = this.data.speakers ?? [];
    }

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.filteredLanguageOptions.filter(option => option.toLowerCase().includes(filterValue));
  }

  closeDialog() {
    this.dialogRef.close()
  }

  add() {
    const talkToSend: CreateTalk = {
      title: this.titleForm.value,
      description: this.descriptionForm.value,
      level: this.levelForm.value,
      language: this.languageForm.value,
      theme: {
        id: this.themeForm.value.id
      },
      format: {
        id: this.formatForm.value.id
      },
      conference: {
        id: this.confForm.value.id
      },
      speakers: this.speakersToAdd.map(speaker => {
        return {id: speaker.id}
      })
    }
    if (this.data == null) {
      this.abstractTalkService.addTalk(talkToSend).subscribe(data => {
        if (data) {
          this.dialogRef.close();
          this.snackBarService.open(`Le talk ${talkToSend.title} a été ajouter`, "Fermer");
        } else {
          this.snackBarService.open(`Un probleme a survenue`, "Fermer");
        }

      });
    } else {
      this.abstractTalkService.putTalk(talkToSend).subscribe(data => {
        if (data) {
          this.dialogRef.close();
          this.snackBarService.open(`Le talk ${talkToSend.title} a été modifier`, "Fermer");
        } else {
          this.snackBarService.open(`Un probleme a survenue`, "Fermer");
        }
      });
    }

  }

}
