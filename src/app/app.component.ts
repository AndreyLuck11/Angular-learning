import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Todo {
  completed: boolean;
  title: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];
  todoTitle = '';
  loading = false;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.fetchTodo();
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return;
    }
    const newTodo: Todo = {
        title: this.todoTitle,
        completed: false
      };
    this.http.post('https://jsonplaceholder.typicode.com/todos', newTodo).subscribe((todo) => {
      console.log(todo);
      this.todos.push(todo as Todo);
      this.todoTitle = '';
    });
  }

  fetchTodo() {
    this.loading = true;
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2').subscribe(response => {
      this.todos = response;
      this.loading = false;
    });
  }

  removeTodo(id: number) {
    this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .subscribe(() => {
          // this.todos = this.todos.filter(t => t.id !== id);
          console.log(this.todos);
          this.todos.forEach((t, i) => {
            if (t.id === id) {
              this.todos.splice(i, 1);
              console.log(this.todos);
            }
          });
    });
  }
}
