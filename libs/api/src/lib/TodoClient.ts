import { HTTPClient } from './HTTPClient';
import { Todo } from './types';

export class TodoClient {
  private httpClient: HTTPClient;
  private todoEndpointPath = '/api/todo';

  constructor(httpClient: HTTPClient) {
    this.httpClient = httpClient;
  }

  async get(): Promise<Response> {
    return await this.httpClient.get(this.todoEndpointPath);
  }

  async getTodo(id: number): Promise<Response> {
    const endpointPath = `${this.todoEndpointPath}/${id}`;
    return await this.httpClient.get(endpointPath);
  }

  post(todo: Todo): Promise<Response> {
    return this.httpClient.post(this.todoEndpointPath, JSON.stringify(todo));
  }

  patch(todo: Todo): Promise<Response> {
    const endpointPath = `${this.todoEndpointPath}/${todo.id}`;
    return this.httpClient.patch(endpointPath, JSON.stringify(todo));
  }

  delete(id: number): Promise<Response> {
    const endpointPath = `${this.todoEndpointPath}/${id}`;
    return this.httpClient.delete(endpointPath);
  }
}
