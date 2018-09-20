import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddtaskComponent } from './addtask/addtask.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';

const routes: Routes = [
  {path: 'task', component: ViewtaskComponent},
  {path: 'task/add', component: AddtaskComponent},
  {path: 'task/edit/:id', component: ViewtaskComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
