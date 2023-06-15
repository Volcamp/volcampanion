import {Component, OnInit} from '@angular/core';
import {AbstractConferenceService} from "../../services/abstract/AbstractConferenceService";
import {VMAdminListConference} from "../../vm/VMAdminListConference";

@Component({
  selector: 'app-admin-conferences',
  templateUrl: './admin-conferences.component.html',
  styleUrls: ['./admin-conferences.component.sass']
})
export class AdminConferencesComponent implements OnInit{
  vm : VMAdminListConference
  constructor(dataService: AbstractConferenceService) {
    this.vm = new VMAdminListConference(dataService);
  }

  ngOnInit() {
    this.vm.init();
  }

}
