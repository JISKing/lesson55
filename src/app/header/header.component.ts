import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { GroupService } from '../service/group.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() groupName = 'Healthy lifestyle';
  @Output() groupNameChange = new EventEmitter<string>();

  constructor(private groupService: GroupService) {}

  changeGroup(groupValue: string) {
    this.groupName = groupValue;
    this.groupNameChange.emit(groupValue);
    this.groupService.setGroup(groupValue);
  }
}
