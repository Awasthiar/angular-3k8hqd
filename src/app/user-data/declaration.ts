import { UserDataComponent } from './component/user-data.component';
import { UserDataService, UserEndpointService } from './service';

export const components = [UserDataComponent];

export const providers = [UserDataService, UserEndpointService];

export const exports = [];
