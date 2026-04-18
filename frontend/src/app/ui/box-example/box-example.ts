import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-box-example',
  imports: [CommonModule],
  templateUrl: './box-example.html',
  styleUrl: './box-example.css',
})
export class BoxExample {

protected readonly boxes = signal<string[]>([
  'i am a box :)',
  'another box',
  'third box'
]);

  addBox() {
    this.boxes.update(arr => [...arr, 'i am a box :)']);
  }

}
