import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskRoutingModule } from './task-routing.module';
import { AddtaskComponent } from './addtask/addtask.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';

@NgModule({
  imports: [
    CommonModule,
    TaskRoutingModule,
    FormsModule
  ],
  declarations: [AddtaskComponent, ViewtaskComponent]
})
export class TaskModule { }
