import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { SharedModule } from '../shared/shared.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserCreateComponent } from './user-create/user-create.component';


@NgModule({
  declarations: [UsersComponent, UsersListComponent, UserDetailsComponent, UserCreateComponent],
  imports: [
    SharedModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
