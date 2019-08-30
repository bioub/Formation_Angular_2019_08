import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LoaderService } from 'src/app/core/loader/loader.service';
import { UserService } from '../user.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {

  users: User[];
  loading;

  constructor(
    private userService: UserService,
    // private loaderService: LoaderService,
  ) { }

  ngOnInit() {
    this.loading = true;
    // this.loaderService.isLoading = true;
    this.userService.getAll()
      .subscribe((users) => {
        this.loading = false;
        // this.loaderService.isLoading = false;
        this.users = users;
      });

    // this.userService.getAll()
    // .subscribe((users) => {
    //   this.loading = false;
    //   this.loaderService.isLoading = false;
    //   this.users = users;
    // });
  }

}
