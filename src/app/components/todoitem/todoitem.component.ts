import { Component, OnInit, Input, EventEmitter,Output} from '@angular/core';
import { Todo } from 'src/app/models/Todo'
import {TodoService} from '../../Services/todo.service'
import { observable } from 'rxjs';
@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo:EventEmitter<Todo>=new EventEmitter()
  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }
  //set dynamic classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes
  }
  //toggle in ui
  onToggle(todo) {
    todo.completed = !todo.completed
    //toggle in server
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo))

  }
  
 
  onDelete(todo) {
    this.deleteTodo.emit(todo)
  }
}
