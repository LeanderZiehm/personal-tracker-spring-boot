import { Component, inject } from '@angular/core';
import { EventService } from '../../../service/event-service';

@Component({
  selector: 'app-event-widget',
  imports: [],
  templateUrl: './event-widget.html',
  styleUrl: './event-widget.css',
})
export class EventWidget {

  private eventService = inject(EventService);

  sendEvent(input: HTMLInputElement) {

    if (input.value === "") {
      console.log("no input -> skip")
      return;
    }

    this.eventService.addEvent({ "text": input.value }).subscribe({
      next: (res) => {
        console.log('Event added', res);
      },
      error: (err) => {
        console.error('Error adding event', err);
      }
    });

    input.value = "";

  }

}
