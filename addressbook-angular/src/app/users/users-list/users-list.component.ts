import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LoaderService } from 'src/app/core/loader/loader.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users;
  loading;

  constructor(
    private httpClient: HttpClient,
    private loaderService: LoaderService,
  ) { }

  ngOnInit() {
    this.loading = true;
    this.loaderService.isLoading = true;
    this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((users) => users.slice(0, 5)),
        // delay(3000)
      )
      .subscribe((users) => {
        this.loading = false;
        this.loaderService.isLoading = false;
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
