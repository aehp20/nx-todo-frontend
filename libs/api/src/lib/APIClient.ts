import { HTTPClient } from './HTTPClient';
import { TodoClient } from './TodoClient';

export class APIClient {
  public todo: TodoClient;

  constructor(httpClient: HTTPClient) {
    this.todo = new TodoClient(httpClient);
  }
}
