import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './core/top-bar/top-bar.component';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { UsersModule } from './users/users.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderComponent } from './core/loader/loader.component';
import { BlogModule } from './blog/blog.module';
import { SharedModule } from './shared/shared.module';
import { LoaderInterceptor } from './core/loader/loader.interceptor';

// export function loaderServiceFactory() {
//   return new LoaderService('...');
// }

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    NotFoundComponent,
    LoaderComponent
  ],
  imports: [
    SharedModule,
    HttpClientModule,
    BrowserModule,
    UsersModule,
    BlogModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    }
    // UserService,
    // { provide: LoaderService, useClass:  LoaderService }
    // équivalent à :
    // LoaderService

    // { provide: LoaderService, useFactory:  loaderServiceFactory }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
