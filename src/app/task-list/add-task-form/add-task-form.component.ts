import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss'],
})
export class AddTaskFormComponent {
  @Output() addTaskEvent = new EventEmitter<string>();
  newTaskName!: string;
  handleInputChange(newValue: string) {
    this.newTaskName = newValue;
  }
  handleButtonClick() {
    this.addTaskEvent.emit(this.newTaskName);
  }
}
