import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { components, providers } from './declaration';
import { UserDataRoutingModule } from './user-data-routing.module';

@NgModule({
  declarations: components,
  imports: [CommonModule, UserDataRoutingModule],
  providers: providers,
  exports: components,
})
export class UserDataModule {}
