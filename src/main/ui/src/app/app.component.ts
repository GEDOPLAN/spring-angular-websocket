import {Component, OnDestroy} from '@angular/core';
import {NotifierService} from './notifier.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'ged-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  form = new FormGroup({
    'message': new FormControl()
  })

  messages: any[] = [];
  lastUserMessage: any = '';

  private disconnect$ = new Subject();

  constructor(public notifierService: NotifierService) {
    this.connect();
  }

  connect() {
    this.notifierService.notify
      .pipe(takeUntil(this.disconnect$))
      .subscribe((msg: any) => {
        this.messages.push(msg);
      })

    this.notifierService.newMessage
      .pipe(takeUntil(this.disconnect$))
      .subscribe((msg: any) => {
        this.lastUserMessage = msg;
      })
  }

  disconnect(){
    this.disconnect$.next(true);
  }

  sendMessage() {
    this.notifierService.send(this.form.value);
  }

  ngOnDestroy() {
    this.disconnect();
  }
}
