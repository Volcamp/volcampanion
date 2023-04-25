import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Planning} from "../../Data/DTO/Planning";
import {Speaker} from "../../Data/DTO/Speaker";




function sizeNumber(screenSize : number) : number{
  if(screenSize<=700) return 1
  if(screenSize<=1100) return 2
  return 3
}
@Component({
  selector: 'app-speakers-list',
  templateUrl: './speakers-list.component.html',
  styleUrls: ['./speakers-list.component.sass']
})

export class SpeakersListComponent implements OnInit{
  @Input() speakers: Speaker[] = [];
  breakpoint!: number;

  @HostListener('window:resize', ['$event'])
  onResize(event : any) {
    console.log("hi")
    this.breakpoint = sizeNumber(event.target.innerWidth );

  }

  ngOnInit(): void {
    this.breakpoint = sizeNumber(window.innerWidth ) ;

  }
}
