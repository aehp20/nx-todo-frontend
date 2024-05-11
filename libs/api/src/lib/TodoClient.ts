import { Todo, TodoCreate, TodoUpdate } from '@nx-todo-frontend/types';

import { HTTPClient } from './HTTPClient';

export class TodoClient {
  private httpClient: HTTPClient;
  private todoEndpointPath = '/api/todo';

  constructor(httpClient: HTTPClient) {
    this.httpClient = httpClient;
  }

  async get(): Promise<Todo[]> {
    return await this.httpClient.get(this.todoEndpointPath);
  }

  async getTodo(id: number): Promise<Todo> {
    const endpointPath = `${this.todoEndpointPath}/${id}`;
    return await this.httpClient.get(endpointPath);
  }

  post(todo: TodoCreate): Promise<Response> {
    return this.httpClient.post(this.todoEndpointPath, JSON.stringify(todo));
  }

  patch(todo: TodoUpdate): Promise<Response> {
    const endpointPath = `${this.todoEndpointPath}/${todo.id}`;
    return this.httpClient.patch(endpointPath, JSON.stringify(todo));
  }

  delete(id: number): Promise<Response> {
    const endpointPath = `${this.todoEndpointPath}/${id}`;
    return this.httpClient.delete(endpointPath);
  }
}
