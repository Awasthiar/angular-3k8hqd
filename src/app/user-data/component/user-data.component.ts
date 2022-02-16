import { Component } from '@angular/core';
import { UserData } from '../model';
import { UserDataService } from '../service';

@Component({
  selector: 'user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css'],
})
export class UserDataComponent {
  //userData: Array<UserData> = [];

  constructor(private _userData: UserDataService) {}
  ngOnInit() {
    this.getUserData();
  }

  getUserData() {
    this._userData.fetchUserDetails().subscribe((response: UserData) => {
      if (response) {
        console.log(response, 'res');
        // this.userData = response.map((user: UserData) => {
        //     let record = new UserData();
        //     record.userId = user.userId;
        //     record.id = user.id;
        //     record.title = user.title;
        //     record.completed = user.completed
        //     return record;
        // })
      }
    });
  }
}
