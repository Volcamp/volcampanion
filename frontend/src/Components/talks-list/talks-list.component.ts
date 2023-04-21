import {AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {compareSchedule} from "../../GeneralVolcamp/CompareTalkPlan";
import {Plan} from "../../Data/DTO/Plan";
import {PlanIdentifier} from "../../Data/DTO/PlanIdentifier";

import {  ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import {TalkMiniViewComponent} from "../talk-mini-view/talk-mini-view.component";
import {TYPE_DIVIDER_PLAN} from "../../Data/DTO/DividerPlan";
import {DividerMiniViewComponent} from "../divider-mini-view/divider-mini-view.component";
import {TYPE_BREAK_PLAN} from "../../Data/DTO/BreakPlan";
import {BreakMiniViewComponent} from "../break-mini-view/break-mini-view.component";

@Component({
  selector: 'app-talks-list',
  templateUrl: './talks-list.component.html',
  styleUrls: ['./talks-list.component.sass']
})
export class TalksListComponent implements OnInit{

  @Input() plans: Plan[] =[] ;
  planConv : PlanIdentifier=new PlanIdentifier();
  container :ViewContainerRef
  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    this.container = this.elRef.nativeElement;

  }

  ngOnInit(): void {
    this.plans.sort(compareSchedule)
  }

}
