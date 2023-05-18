import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { GroupService } from '../service/group.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {
  members = 0;
  group = '';

  @Output() close = new EventEmitter();

  constructor(private groupService: GroupService) {}

  ngOnInit() {
    this.groupService.getGroup().subscribe(group => {
      this.group = group;
    });
  }
}
