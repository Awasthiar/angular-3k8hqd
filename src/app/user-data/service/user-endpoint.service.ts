import { Injectable } from '@angular/core';
import { ApiUrl } from '../constant';

@Injectable()
export class UserEndpointService {
  private _const = ApiUrl;

  getUserDetails() {
    return this._const.GET_USER_DATA;
  }
}
