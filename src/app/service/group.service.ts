import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private groupSubject = new BehaviorSubject<string>('Healthy lifestyle');

  setGroup(group: string) {
    this.groupSubject.next(group);
  }

  getGroup() {
    return this.groupSubject.asObservable();
  }
}


