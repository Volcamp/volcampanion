import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Speaker} from "../../data/dto/input/Speaker";
import {NavigationService} from "../../services/NavigationService";
import {DataParamService} from "../../services/DataParamService";


function sizeNumber(screenSize: number): number {
  if (screenSize <= 600) return 1
  if (screenSize <= 1100) return 2
  if (screenSize <= 1400) return 3
  if (screenSize <= 1600) return 4
  return 5
}

@Component({
  selector: 'app-speakers-list',
  templateUrl: './speakers-list.component.html',
  styleUrls: ['./speakers-list.component.sass']
})

export class SpeakersListComponent implements OnInit {
  @Input() speakers: Speaker[] = [];
  breakpoint!: number;

  public constructor(private navigation: NavigationService, private data: DataParamService) {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.breakpoint = sizeNumber(event.target.innerWidth);
  }

  ngOnInit(): void {
    this.breakpoint = sizeNumber(window.innerWidth);
  }

  navigate(speaker: Speaker) {
    this.navigation.goToSpeaker(speaker)
  }
}
