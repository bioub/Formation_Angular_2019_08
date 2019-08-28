import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { CountComponent } from './count/count.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SelectComponent } from './select/select.component';
import { ClockComponent } from './clock/clock.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CountComponent,
    ContactFormComponent,
    SelectComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
