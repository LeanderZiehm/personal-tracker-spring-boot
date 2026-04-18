import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-habit-tracker',
  imports: [CommonModule,FormsModule],
  templateUrl: './habit-tracker.html',
  styleUrl: './habit-tracker.css',
})
export class HabitTracker {

  private http = inject(HttpClient);
  protected readonly showModal = signal<boolean>(false);
  habitName = '';
  openModal() {
    this.showModal.set(true);
  }
  closeModal() {
    this.showModal.set(false);
    // 
  }

  submitForm() {

    const isHabit = false;
    if (isHabit) {

      const habitPayload = { name: this.habitName };


      this.http.post('/habit', habitPayload).subscribe({
        next: () => {
          console.log("habit created");
          this.closeModal();
        },
        error: (err) => {
          console.error("habit creation failed", err)
        }

      });

    } else {


      const payload = { text: this.habitName };

      this.http.post('https://tracker-api.leanderziehm.com/events', payload).subscribe({
        next: () => {
          console.log("event created");
          this.closeModal();
        },
        error: (err) => {
          console.error("event creation failed", err)
        }

      });



    }


  }
}
