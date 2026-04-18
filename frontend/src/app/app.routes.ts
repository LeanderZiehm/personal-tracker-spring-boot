import { Routes } from '@angular/router';
import { MathTracker } from './pages/math-tracker/math-tracker';
import { TimeTracker } from './pages/time-tracker/time-tracker';
import { Journal } from './pages/journal/journal';
import { HabitTracker } from './pages/habit-tracker/habit-tracker';
import { FoodTracker } from './pages/food-tracker/food-tracker';
import { NumberTracker } from './pages/number-tracker/number-tracker';

export const routes: Routes = [
    {path:"time-tracker", component:TimeTracker},
    {path:"number-tracker", component:NumberTracker},
    {path:"journal", component:Journal},
    {path:"food-tracker", component:FoodTracker},
    {path:"habit-tracker", component:HabitTracker},
    {path:"math-tracker", component:MathTracker},
];
