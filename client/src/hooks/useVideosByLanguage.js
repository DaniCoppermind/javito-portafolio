import { useQuery } from '@tanstack/react-query';
import { getVideosByLanguageRequest } from '../api/videos';

export const useVideosByLanguage = language => {
  return useQuery({
    queryKey: ['videos', language],
    queryFn: () => getVideosByLanguageRequest(language),
    select: response => response.data,
    enabled: !!language,
  });
};
