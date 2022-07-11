import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RxStomp} from '@stomp/rx-stomp';
import {ReactiveFormsModule} from '@angular/forms';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: RxStomp,
      useFactory: () => {
        const rxStomp = new RxStomp();
        rxStomp.configure({
          brokerURL: environment.wsUrl,
        });

        rxStomp.activate();
        return rxStomp;
      },
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
