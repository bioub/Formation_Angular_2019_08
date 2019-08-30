import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [UsersComponent, UsersListComponent],
  imports: [
    SharedModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
