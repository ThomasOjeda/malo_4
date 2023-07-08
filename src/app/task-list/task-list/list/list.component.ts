import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  taskList: any[] = [
    {
      taskName: 'Task 1',
      checked: true,
    },
    {
      taskName: 'Task 2',
      checked: false,
    },
    {
      taskName: 'Task 3',
      checked: false,
    },
    {
      taskName: 'Task 4',
      checked: true,
    },
    {
      taskName: 'Task 5',
      checked: true,
    },
    {
      taskName: 'Task 6',
      checked: false,
    },
    {
      taskName: 'Task 7',
      checked: false,
    },
    {
      taskName: 'Task 8',
      checked: false,
    },
  ];

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
