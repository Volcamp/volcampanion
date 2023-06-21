import {Component, ElementRef, HostListener, Input, ViewChild} from '@angular/core';
import {DividerPlanning} from "../../data/dto/input/DividerPlanning";
import {formatDate} from "../../common/DateFunc";

@Component({
  selector: 'app-divider-teaser-view',
  templateUrl: './divider-teaser-view.component.html',
  styleUrls: ['./divider-teaser-view.component.sass']
})
export class DividerTeaserViewComponent {
  @Input() dividerPlanning!: DividerPlanning;
  startDate = new Date();
  @ViewChild('fix', {static: false}) fix!: ElementRef;
  positionInitialY: number = 0;
  padding: number = 0;
  visible: boolean = false;

  ngOnInit(): void {
    this.startDate = new Date(this.dividerPlanning.schedule);
    this.padding = document.getElementById('header')!.offsetHeight
  }

  formatDate(date: Date) {
    return formatDate(date)
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    if (window.scrollY > (this.fix.nativeElement as HTMLElement).getBoundingClientRect().y) {
      this.visible = true;
    }
    if (64 <= (this.fix.nativeElement as HTMLElement).getBoundingClientRect().y) {
      this.visible = false;
    }
  }
}
