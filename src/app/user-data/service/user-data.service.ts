import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from '../model';
import { UserEndpointService } from './user-endpoint.service';

@Injectable()
export class UserDataService {
  constructor(
    private _http: HttpClient,
    private _endPoint: UserEndpointService
  ) {}

  fetchUserDetails(): Observable<UserData> {
    return this._http.get<UserData>(
      `https://${this._endPoint.getUserDetails()}`
    );
  }
}
