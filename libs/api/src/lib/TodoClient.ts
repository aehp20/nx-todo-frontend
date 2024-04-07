import { HTTPClient } from "./HTTPClient";

export class TodoClient {
  private httpClient: HTTPClient;
  private todoEndpointPath = '/api/todo';

  constructor(httpClient: HTTPClient) {
    this.httpClient = httpClient;
  }

  async get(): Promise<Response> {
    return await this.httpClient.get(this.todoEndpointPath);
  }
}
// fetch(`http://localhost:3000/api/todo/${id}`).then(
//         (res) => res.json()
//       ),
// fetch('http://localhost:3000/api/todo', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(newTodo)
//     })
//     fetch(`http://localhost:3000/api/todo/${id}`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(updateTodo)
//     })
//     fetch(`http://localhost:3000/api/todo/${id}`, {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
