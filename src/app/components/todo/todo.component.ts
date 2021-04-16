import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  localItem:string

  todos: Todo[]
  constructor() {
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null){
      this.todos = [
      
      ]
    }
    else{
      this.todos = JSON.parse(this.localItem);
    }
  


  }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo) {
    console.log("todo to delete", todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos",JSON.stringify(this.todos));

  }

  addTodo(todo:Todo)
  {
    console.log("New added todo",todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
    
    
  }



}
