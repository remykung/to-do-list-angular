import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { TaskService } from '../task.service';
import { ButtonComponent } from '../button/button.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [ MatListModule,
    CommonModule,
     ButtonComponent,
     MatIconModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  // make this string list dynamic 
  tasklist: string[] = [];
  isEmpty: boolean = true;
  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.currentTasks.subscribe(tasks => {
      this.tasklist = tasks;
      this.isEmpty = this.tasklist.length === 0; 
    });
 }
 deleteTask(index: number) {
  this.taskService.removeTask(index);
}
}