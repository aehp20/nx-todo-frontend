export class HTTPClient {
  private urlApp: string;
  private config = {
    'Content-Type': 'application/json'
  }

  constructor(urlApp: string) {
    this.urlApp = urlApp;
  }

  getConfig() {
    return this.config;
  }

  getUrl(endpointPath: string): string {
    return `${this.urlApp}${endpointPath}`;
  }

  async get(endpointPath: string): Promise<Response> {
    return await fetch(this.getUrl(endpointPath), {
      method: 'GET',
      headers: new Headers(this.config)}).then(
      (res) => res.json()
    );
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
