import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskRoutingModule } from './task-routing.module';
import { AddtaskComponent } from './addtask/addtask.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';
import {TaskfilterPipe} from './viewtask/taskfilter.pipe';

@NgModule({
  imports: [
    CommonModule,
    TaskRoutingModule,
    FormsModule
  ],
  declarations: [AddtaskComponent, ViewtaskComponent, TaskfilterPipe]
})
export class TaskModule { }
