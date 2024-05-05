import { useQuery } from 'react-query';
import { useAPIContext } from '../APIProvider';
import { todoKeys } from './queries';

export function useTodo(id: number) {
  const api = useAPIContext();
  return useQuery({
    queryKey: todoKeys.byId(id),
    queryFn: () => api.todo.getTodo(id),
    enabled: !!id,
  });
}
