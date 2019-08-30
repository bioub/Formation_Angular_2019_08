import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../shared/user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit, OnDestroy {

  user = new User();
  subscription: Subscription;

  constructor(
    private userService: UserService,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  handleSubmit() {
    this.subscription = this.userService.create(this.user).subscribe((user) => {
      this.router.navigate(['users']);
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
