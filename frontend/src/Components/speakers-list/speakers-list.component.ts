import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Speaker} from "../../Data/DTO/Speaker";
import {Router} from "@angular/router";
import {DataParamService} from "../../services/data-param.service";
import {NavigationService} from "../../services/navigation.service";
import {AppRoutes, toRoute} from "../../app/AppRoutes";


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
  detailRoute = toRoute(AppRoutes.DETAIL_SPEAKER_ROUTE);

  public constructor(private navgation: NavigationService, private data: DataParamService) {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.breakpoint = sizeNumber(event.target.innerWidth);
  }

  ngOnInit(): void {
    this.breakpoint = sizeNumber(window.innerWidth);
  }

  navigate(speaker: Speaker) {
    this.navgation.goToSpeaker(speaker)
  }
}
