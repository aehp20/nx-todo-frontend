import { useParams } from 'react-router-dom';

export function useParamsId() {
  const { id } = useParams();
  return id ? Number.parseInt(id, 10) : 0;
}
