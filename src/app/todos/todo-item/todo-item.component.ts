import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from '../todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['../../app.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: ToDo;
  constructor() { }

  ngOnInit(): void {
  }

}
