import { LowerCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ToDo } from './toDo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoList';

  toDoList: ToDo[] = [
    {task: "Wash the car", completed: false},
    {task: "Vaccuum the carpet", completed: true},
    {task: "Go grocery shopping", completed: false},
    {task: "Clean the gutters", completed: true},
    {task: "Wash the dog", completed: false}
  ]

  task: string = "";

  query: string = "";

  allDone: boolean = false;

  newTask: string = "";

  showEdit: boolean = false;

  addTask(_task: string): void {
    this.toDoList.push({task: _task, completed: false})
  }

  removeTask(td: ToDo, tdl: ToDo[]) {
    tdl.splice(tdl.indexOf(td, 1))
  }

  showEditContent(se: boolean) {
    se === true;
  }

  editTask(tdl: ToDo[], td: ToDo, newTask: string) {
    let tdIndex = tdl.indexOf(td);
    tdl[tdIndex].task = newTask;
    tdl[tdIndex].completed = false;
  }

  completeTask(toDo: ToDo): void {
    toDo.completed = !toDo.completed;
  }

  congratulations(list: ToDo[]) {
    let a: boolean = list.every(this.isDone)
    if (a === true) {
      return true
    }
    else return false
  }

  isDone(td: ToDo) {
    if (td.completed === true) {
      return true;
    }
    else return false;
  }
}
