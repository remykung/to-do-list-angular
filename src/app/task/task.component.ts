import { Component } from '@angular/core';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ButtonComponent,
    CommonModule
    ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task: string = '';
  tasks: string[] = [];

  constructor(private taskService: TaskService) {}

  addTask() {
    console.log("Adding task:", this.task); // Debug log
    if (this.task.trim()) {
      this.taskService.addTask(this.task);
      console.log("Current tasks:", this.tasks); // Debug log
      this.task = ''; // Clear the input after adding
    }
  }
  
}



