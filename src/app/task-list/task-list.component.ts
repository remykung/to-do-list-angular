import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [ MatListModule ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  // make this string list dynamic 
  tasklist: string[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.currentTasks.subscribe(tasks => {
      this.tasklist = tasks;
    });
 }
}