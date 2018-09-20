import {Pipe, PipeTransform } from '@angular/core';
import { Task } from '../task';
@Pipe({
  name: 'taskSearch'
})
export class TaskfilterPipe implements PipeTransform {
  transform(tasks: Task[], tasknameSearch: string, parenttaskSearch: string, priorityfromSearch: number, prioritytoSearch: number,
            startdateSearch: string, enddateSearch: string) {
    if (tasks && tasks.length) {
      return tasks.filter(task => {
        if (tasknameSearch && task.taskName.toLowerCase().indexOf(tasknameSearch.toLowerCase()) === -1) {
          return false;
        }
        if (parenttaskSearch && task.parentTaskName.toLowerCase().indexOf(parenttaskSearch.toLowerCase()) === -1) {
          return false;
        }
        if (priorityfromSearch && task.priority < priorityfromSearch) {
          return false;
        }
        if (prioritytoSearch && task.priority > prioritytoSearch) {
          return false;
        }
        if (startdateSearch && task.startDate !== startdateSearch) {
          return false;
        }
        if (enddateSearch && task.endDate !== enddateSearch) {
          return false;
        }
        return true;
      });
    } else {
      return tasks;
    }
  }
}
