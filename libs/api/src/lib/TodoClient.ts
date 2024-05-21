import {
  ClassTransformerGroup,
  PaginationResponse,
  Todo,
} from '@nx-todo-frontend/models';

import { instanceToPlain } from 'class-transformer';

import { HTTPClient } from './HTTPClient';

export class TodoClient {
  private httpClient: HTTPClient;
  private endpointPath = '/todo';

  constructor(httpClient: HTTPClient) {
    this.httpClient = httpClient;
  }

  async get(
    signal: AbortSignal,
    params?: Record<string, string>,
  ): Promise<PaginationResponse<Todo>> {
    return await this.httpClient.get(this.endpointPath, signal, params);
  }

  async getTodo(signal: AbortSignal, id: number): Promise<Todo> {
    const endpointPath = `${this.endpointPath}/${id}`;
    return await this.httpClient.get(endpointPath, signal);
  }

  post(todo: Todo): Promise<Response> {
    return this.httpClient.post(
      this.endpointPath,
      JSON.stringify(
        instanceToPlain(todo, {
          groups: [ClassTransformerGroup.CREATE],
        }),
      ),
    );
  }

  patch(todo: Todo): Promise<Response> {
    const endpointPath = `${this.endpointPath}/${todo.id}`;
    return this.httpClient.patch(
      endpointPath,
      JSON.stringify(
        instanceToPlain(todo, {
          groups: [ClassTransformerGroup.UPDATE],
        }),
      ),
    );
  }

  delete(id: number): Promise<Response> {
    const endpointPath = `${this.endpointPath}/${id}`;
    return this.httpClient.delete(endpointPath);
  }
}
