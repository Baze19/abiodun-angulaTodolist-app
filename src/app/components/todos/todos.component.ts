import { Component, OnInit, ɵConsole } from '@angular/core';
import { TodoService } from '../../Services/todo.service'
import { Todo } from '../../models/Todo'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[]
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => { this.todos = todos })
  }
  //delete on the ui
  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t.id !== todo.id)

    //delete on the server
    this.todoService.deleteTodo(todo).subscribe();
  }
  //add Todo
  addTodo(tod: Todo) {
    
    this.todoService.addTodo(tod).subscribe(tod => {
      this.todos.push(tod);
    })
  }
}
