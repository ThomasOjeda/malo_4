import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  taskList: any[] = [];

  addTask(task: string) {
    if (task) {
      task = task.trim();
      if (task.length !== 0)
        this.taskList.unshift({ taskName: task, checked: false });
    }
  }

  deleteTask(taskIndex: number) {
    this.taskList.splice(taskIndex, 1);
  }

  toggleTaskCheck(taskIndex: number, state: boolean) {
    this.taskList[taskIndex].checked = state;
  }
}
