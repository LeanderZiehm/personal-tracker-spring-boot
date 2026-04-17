import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly showModal = signal<boolean>(false);
  habitName = '';
  // constructor (){}
  constructor(private http: HttpClient) {}
  openModal(){
    this.showModal.set(true);
  }
  closeModal(){
    this.showModal.set(false);
    // 
  }

  submitForm(){

    const isHabit = false;
    if (isHabit){

    const habitPayload = {name:this.habitName};


    this.http.post('/habit',habitPayload).subscribe({
      next: () => {
        console.log("habit created");
        this.closeModal();
      },
      error: (err) => {
        console.error("habit creation failed",err)
      }

    });

    }else{


    const payload = {text:this.habitName};

    this.http.post('https://tracker-api.leanderziehm.com/events',payload).subscribe({
      next: () => {
        console.log("event created");
        this.closeModal();
      },
      error: (err) => {
        console.error("event creation failed",err)
      }

    });



    }


  }

  // protected readonly boxes = signal<string[]>([]);
  protected readonly boxes = signal<string[]>([
  'i am a box :)',
  'another box',
  'third box'
]);

  addBox() {
    this.boxes.update(arr => [...arr, 'i am a box :)']);
  }
}

// console.log("hi");

// function main(){
//     const addBtn = document.getElementById("addBtn");
//     if (addBtn){
//       addBtn.addEventListener("click",onButonClick);
//     }
// }

// function onButonClick(){
//     console.log("clicked button");
//     const grid = document.getElementById("grid");
//     if (grid){
//       const text = "i am a box :)"
//       const myElement = `<div class="box"> ${text} </div>`; 
//       grid.innerHTML += myElement;
//     }
//     // grid.
// }

// // document.addEventListener()
// document.addEventListener("DOMContentLoaded", main);