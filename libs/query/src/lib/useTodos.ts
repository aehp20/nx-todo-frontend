import {useQuery} from 'react-query';
import { useAPIContext } from './APIProvider';

export function useTodos() {
	const api = useAPIContext();
	return useQuery('randomFacts', async () => api.todo.get());
}
