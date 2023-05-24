import {Component, OnInit} from '@angular/core';
import {VMAdminListTalk} from "../../vm/VMAdminListTalk";
import {AbstractTalkService} from "../../services/AbstractTalkService";
import {AbstractConferenceService} from "../../services/AbstractConferenceService";

@Component({
  selector: 'app-admin-talks',
  templateUrl: './admin-talks.component.html',
  styleUrls: ['./admin-talks.component.sass']
})
export class AdminTalksComponent implements OnInit {
  vm: VMAdminListTalk

  constructor(dataService: AbstractTalkService, confService: AbstractConferenceService) {
    this.vm = new VMAdminListTalk(dataService, confService);
  }

  ngOnInit(): void {
    this.vm.init();
  }

}
