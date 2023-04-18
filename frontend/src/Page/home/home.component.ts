import { Component } from '@angular/core';
import {TALK_DATA} from "../../Data/Stub";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  num=5
  talks=TALK_DATA
}
