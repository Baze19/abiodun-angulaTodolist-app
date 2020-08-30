import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo'


const HttpOption ={
  headers: new HttpHeaders(
    {
      'Content-Type':'applicationg/json'
    }
  )
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todourl: string = 'https://jsonplaceholder.typicode.com/todos'
  todoslimit = '?_limit=5'
  constructor(private http: HttpClient) { }

  //GET TODOS
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todourl}${this.todoslimit}`)

    //TOGGLE COMPLETED


    /*
      return[
        {
          id:1,
          title:'todo one',
          completed:true
          
  
        },
        {
          id:1,
          title:'todo twond',
          completed:false
  
        },
        {
          id:1,
          title:'todo three',
          completed:false
  
        }
      ]*/

  }
//delete Todo from the server
deleteTodo(todo:Todo):Observable<Todo>{
  const url = `${this.todourl}${todo.id};}`
  return this.http.delete<Todo>(url,HttpOption)
}
  //toggle complete
  toggleCompleted(todo:Todo):Observable<any>{
    const url=`${this.todourl}${todo.id}`
    return this.http.put(url,todo,HttpOption)
  }
  
  //addtodo post request
  addTodo(tod: Todo):Observable<Todo>{
    console.log(tod)
return this.http.post<Todo>(this.todourl,tod,HttpOption)
  }
}
