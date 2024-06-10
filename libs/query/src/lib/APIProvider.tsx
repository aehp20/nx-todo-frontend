import { APIClient, HTTPClient } from '@nx-todo-frontend/api';

import { createContext, ReactNode, useContext, useMemo } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const APIContext = createContext({} as APIClient);

type APIProviderProps = {
  httpClient: HTTPClient;
  children: ReactNode;
};

const queryClient = new QueryClient();

export function APIProvider(props: Readonly<APIProviderProps>) {
  const { httpClient, children } = props;

  const value = useMemo(() => {
    return new APIClient(httpClient);
  }, [httpClient]);

  return (
    <QueryClientProvider client={queryClient}>
      <APIContext.Provider value={value}>{children}</APIContext.Provider>
    </QueryClientProvider>
  );
}

export function useAPIContext() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error('APIContext: Context must be used within a Provider');
  }
  return context;
}
