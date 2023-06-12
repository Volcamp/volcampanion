import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-admin-planning-actions',
  templateUrl: './admin-planning-actions.component.html',
  styleUrls: ['./admin-planning-actions.component.sass']
})
export class AdminPlanningActionsComponent {
  @Output() uploadEmitter = new EventEmitter<void>();
  @Output() saveEmitter = new EventEmitter<void>();
  @Output() deleteEmitter = new EventEmitter<void>();

  upload() {
    this.uploadEmitter.emit();
  }

  save() {
    this.saveEmitter.emit();
  }

  delete() {
    this.deleteEmitter.emit();
  }
}
