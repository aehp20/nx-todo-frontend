export class HTTPClient {
  private urlApp: string;
  private apiVersionPath: string;

  private config = {
    'Content-Type': 'application/json',
  };

  constructor(urlApp: string, apiVersionPath: string) {
    this.urlApp = urlApp;
    this.apiVersionPath = apiVersionPath;
  }

  getConfig() {
    return this.config;
  }

  getUrl(endpointPath: string): string {
    return `${this.urlApp}${this.apiVersionPath}${endpointPath}`;
  }

  async get<T>(endpointPath: string): Promise<T> {
    return await fetch(this.getUrl(endpointPath), {
      method: 'GET',
      headers: new Headers(this.config),
    }).then((res) => res.json());
  }

  post(endpointPath: string, data: string): Promise<Response> {
    return fetch(this.getUrl(endpointPath), {
      method: 'POST',
      headers: new Headers(this.config),
      body: data,
    });
  }

  patch(endpointPath: string, data: string): Promise<Response> {
    return fetch(this.getUrl(endpointPath), {
      method: 'PATCH',
      headers: new Headers(this.config),
      body: data,
    });
  }

  delete(endpointPath: string): Promise<Response> {
    return fetch(this.getUrl(endpointPath), {
      method: 'DELETE',
      headers: new Headers(this.config),
    });
  }
}
