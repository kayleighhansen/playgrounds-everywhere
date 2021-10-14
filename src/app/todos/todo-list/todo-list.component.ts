import { Component, OnInit } from '@angular/core';
import { ToDo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['../../app.component.css']
})
export class TodoListComponent implements OnInit {

  todos: ToDo[] = [
    new ToDo(1, 'White House Playground', 'Lets go build a really cool swingset', 'USA', 'Washington D.C.', 'Swings', '3000', 'Michelle Obama'),
    new ToDo(2, 'White House Playground', 'Lets go build a really cool swingset', 'USA', 'Washington D.C.', 'Swings', '3000', 'Michelle Obama'),
    new ToDo(3, 'White House Playground', 'Lets go build a really cool swingset', 'USA', 'Washington D.C.', 'Swings', '3000', 'Michelle Obama'),

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
