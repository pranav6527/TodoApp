import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  name: string
  disc: string

  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  submit() {
    const addNewtodo = {
      id: 9,
      name: this.name,
      disc: this.disc,
      isActive:true
    }

    this.addTodo.emit(addNewtodo);
   



  }

}
