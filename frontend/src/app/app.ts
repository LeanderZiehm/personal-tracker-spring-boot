import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Footer } from './ui/footer/footer';
import { Header } from './ui/header/header';
import { EventWidget } from './ui/widgets/event-widget/event-widget';
import { BoxExample } from './ui/box-example/box-example';
import { CommonModule } from '@angular/common';
import { HabitTracker } from './pages/habit-tracker/habit-tracker';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, Footer, Header, EventWidget, BoxExample, HabitTracker],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {




}
