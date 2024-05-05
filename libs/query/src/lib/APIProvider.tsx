import { ReactNode, createContext, useContext, useMemo } from "react";
import {QueryClient, QueryClientProvider} from 'react-query';
import { APIClient, HTTPClient } from "@nx-todo-frontend/api";

const APIContext = createContext({});

type APIProviderProps = {
  httpClient: HTTPClient;
  children: ReactNode;
}

const queryClient = new QueryClient();

export function APIProvider(props: APIProviderProps) {
  const { httpClient, children } = props;

  const api = new APIClient(httpClient);

  const value = useMemo(()=> {
    return api;
  }, [api]);

  return (
    <QueryClientProvider client={queryClient}>
			<APIContext.Provider value={value}>
        {children}
      </APIContext.Provider>
		</QueryClientProvider>
  );
}

export function useAPIContext() {
  return useContext(APIContext);
}