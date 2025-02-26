import { useQuery } from '@tanstack/react-query';
import { getVideoRequest } from '../api/videos';

export const useVideoQuery = id => {
  return useQuery({
    queryKey: ['video', id],
    queryFn: () => getVideoRequest(id),
    select: response => response.data,
    enabled: !!id, // Solo ejecuta la consulta si hay un ID válido
  });
};
