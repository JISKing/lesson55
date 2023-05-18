import {
  Component,
  Input,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Input() name = '';
  @Input() status = '';
  @Input() img = '';
  @Input() groupName = '';

  @ViewChild('nameInput', { static: false }) nameInput!: ElementRef;
  @ViewChild('statusInput', { static: false }) statusInput!: ElementRef;

  constructor() {}

  changeName(nameValue: string) {
    this.name = nameValue;

    this.nameInput.nativeElement.value = '';
  }

  changeStatus(statusValue: string) {
    this.status = statusValue;

    this.statusInput.nativeElement.value = '';
  }
}
