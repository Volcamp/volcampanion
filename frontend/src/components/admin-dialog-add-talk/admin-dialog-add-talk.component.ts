import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {FormBuilder, Validators} from "@angular/forms";
import {AbstractThemeService} from "../../services/AbstractThemeService";
import {AbstractFormatService} from "../../services/AbstractFormatService";
import {Format} from "../../data/dto/input/Format";
import {Theme} from "../../data/dto/input/Theme";
import {AbstractConferenceService} from "../../services/AbstractConferenceService";
import {Conference} from "../../data/dto/input/Conference";

@Component({
  selector: 'app-admin-dialog-add-talk',
  templateUrl: './admin-dialog-add-talk.component.html',
  styleUrls: ['./admin-dialog-add-talk.component.sass']
})
export class AdminDialogAddTalkComponent {
  formats: Format[] = [];
  themes: Theme[] = [];
  conferences: Conference[] = [];


  constructor(public dialogRef: MatDialogRef<AdminDialogAddTalkComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              private _formBuilder: FormBuilder, private themeService: AbstractThemeService,
              private formatService: AbstractFormatService, private conferenceService: AbstractConferenceService) {

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

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  closeDialog() {
    this.dialogRef.close()
  }

  add() {
    //requete add
    this.dialogRef.close()

  }

}
