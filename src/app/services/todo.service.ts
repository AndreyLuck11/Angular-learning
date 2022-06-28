import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Todo {
  completed: boolean;
  title: string;
  id?: number;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) {}

  addTodo(todo: Todo): Observable<Todo> {
    return  this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo, {
      headers: new HttpHeaders({
        MyCustomHeader: Math.random().toString()
      })
    });
  }

  fetchTodos(): Observable<Todo[]> {
    let params = new HttpParams();
    params = params.append('_limit', '4');
    params = params.append('_custom', 'anything');
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
      // params: new HttpParams().set('_limit', '4')
      params,
    });
  }

  removeTodo(id: number): Observable<void> {
    return  this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

  complitedTodo(id: number): Observable<Todo> {
     return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: true
    });
  }
}
