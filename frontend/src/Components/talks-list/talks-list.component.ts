import {Component, Input} from '@angular/core';
import {Talk} from "../../Data/DTO/Talk"

@Component({
  selector: 'app-talks-list',
  templateUrl: './talks-list.component.html',
  styleUrls: ['./talks-list.component.sass']
})
export class TalksListComponent {
  @Input() talks: Talk[] =[] ;
  speakers=[
    "rami",
    "camille",
    "cheval",
    "yannis",
    "benoît"
  ]
}
