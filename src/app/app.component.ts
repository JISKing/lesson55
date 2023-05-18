import { Component, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { UserService } from './service/user.service';
import { PopUpComponent } from './pop-up/pop-up.component';
import { GroupService } from './service/group.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: any[];
  @ViewChild('popUp', { read: ViewContainerRef })
  private viewRef!: ViewContainerRef;
  private componentRef!: ComponentRef<PopUpComponent>;

  constructor(private userService: UserService, private groupService: GroupService) {
    this.users = userService.users;
  }

  showPopUp() {
    this.componentRef = this.viewRef.createComponent(PopUpComponent);
    this.componentRef.instance.members = this.users.length;
    this.componentRef.instance.close.subscribe(() => {
      this.viewRef.clear();
    });
  }

  groupName: string = 'Healthy lifestyle';

  changeGroupName(groupValue: string) {
    this.groupName = groupValue;
    this.groupService.setGroup(groupValue);
  }
}


