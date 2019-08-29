import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  animation$: Observable<string>;

  constructor(public loaderService: LoaderService) { }

  ngOnInit() {
    // '123'.padStart(5, '0'); // 00123

    // Marble Graph rxmarbles.com / learnrxjs.com / reactive.how
    // ----0----1----2----3----4----5----6----7----
    // map((v) => v % 5 + 1)
    // ----1----2----3----4----5----1----2----3----
    // map((v) => '.'repeat(v))
    // ----(.)----(..)----(...)----(....)----(.....)----(.)----(..)----(..).----
    this.animation$ = interval(200).pipe(
      map((v) => ':) '.repeat(v % 5 + 1))
    );
  }

}
