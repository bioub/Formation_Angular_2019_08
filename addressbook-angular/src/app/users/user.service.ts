import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from './shared/user.model';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<User[]>(environment.apiBaseUrl + '/users')
      .pipe(
        map((users) => users.slice(0, 5)),
        // delay(3000)
      );
  }
}
