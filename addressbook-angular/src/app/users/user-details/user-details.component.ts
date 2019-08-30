import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../shared/user.model';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user$: Observable<User>;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.user$ = this.activatedRoute.paramMap.pipe(
      switchMap((paramMap) =>  this.userService.getById(paramMap.get('id')))
    );

    // console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    // this.activatedRoute.paramMap.subscribe((paramMap) => {
    //   this.userService.getById(paramMap.get('id')).subscribe((user) => {
    //     this.user = user;
    //   });
    // });
  }

}
