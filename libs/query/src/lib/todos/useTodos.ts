import { useQuery } from '@tanstack/react-query';

import { useAPIContext } from '../APIProvider';

import { todoKeys } from './queries';

export function useTodos() {
  const api = useAPIContext();
  return useQuery({
    queryKey: todoKeys.all,
    queryFn: () => api.todo.get(),
  });
}
