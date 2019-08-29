import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((users) => users.slice(0, 5)),
        // delay(3000)
      );
  }
}
