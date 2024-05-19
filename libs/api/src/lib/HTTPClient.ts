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

  getUrl(endpointPath: string, params?: Record<string, string>): URL {
    const url = new URL(`${this.urlApp}${this.apiVersionPath}${endpointPath}`);
    const urlSearchParams = new URLSearchParams(params);
    url.search = urlSearchParams.toString();
    return url;
  }

  async get<T>(
    endpointPath: string,
    params?: Record<string, string>,
  ): Promise<T> {
    return await fetch(this.getUrl(endpointPath, params), {
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
