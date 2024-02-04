import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

    // Initialize the BehaviorSubject with an empty array of tasks
    private tasksSource = new BehaviorSubject<string[]>([]);

    // Expose the current tasks as an observable that components can subscribe to
    currentTasks = this.tasksSource.asObservable();

  constructor() { }

  addTask(task: string) {
    // Get the current tasks from the BehaviorSubject
    const currentTasks = this.tasksSource.getValue();
    // Add the new task to the current tasks
    currentTasks.push(task);
    // Publish the updated tasks to the BehaviorSubject
    this.tasksSource.next(currentTasks);
  }
}
