import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  task: Task = new Task();

  constructor(private router: Router, private taskservice: TaskService) { }

  ngOnInit() {
  }

  addTask(): void {
    this.taskservice.addTask(this.task).subscribe( data => { alert('Task added successfully');
    });
  }

  reset(): void {
    this.task.taskName = '';
    this.task.parentTaskName = '';
    this.task.priority = null;
    this.task.startDate = '';
    this.task.endDate = '';
  }

}
