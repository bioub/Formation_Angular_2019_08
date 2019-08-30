import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
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

  getById(id: string | number) {
    const user$ = this.httpClient.get<User>(environment.apiBaseUrl + '/users/' + id);

    if (Number(id) === 3) {
      return user$.pipe(
        delay(3000),
      );
    }

    return user$;
  }
}
