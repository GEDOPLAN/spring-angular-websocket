import {Injectable} from '@angular/core';
import {map, Observable, refCount, share, Subject, takeUntil} from 'rxjs';
import {RxStomp} from '@stomp/rx-stomp';


@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  notify: Observable<any> = new Subject();
  newMessage: Observable<any> = new Subject();

  constructor(private stomp: RxStomp) {
    this.notify = stomp.watch('/notifier/message')
      .pipe(
        map(message => JSON.parse(message.body)),
        share({resetOnRefCountZero: true})
      );

    this.newMessage = stomp.watch('/notifier/new-message')
      .pipe(
        map(message => JSON.parse(message.body)),
        share({resetOnRefCountZero: true})
      )
  }

  send(message: any) {
    this.stomp.publish({
      destination: '/app/message',
      body: JSON.stringify(message),
      headers: {'content-type': 'application/json'}
    });
  }
}
