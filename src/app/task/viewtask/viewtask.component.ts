import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent implements OnInit {

  tasks: Task[];
  rendertask: boolean;
  editingTask: Task;
  tasknameSearch: string;
  parenttaskSearch: string;
  priorityfromSearch: number;
  prioritytoSearch: number;
  startdateSearch: string;
  enddateSearch: string;

  constructor(private router: Router, private taskservice: TaskService) { }

  ngOnInit() {
    this.taskservice.getTasks()
      .subscribe( data => {
        this.tasks = data;
      });
  }

  editTask(task: Task) {
    this.rendertask = true;
    this.editingTask = task;
  }

  updateTask(task: Task): void {
    this.taskservice.updateTask(task).subscribe();
  }

  cancelTask() {
    this.rendertask = false;
  }

  endTask(task: Task): void {
    task.endTask = 'yes';
    this.taskservice.updateTask(task).subscribe();
  }

}
