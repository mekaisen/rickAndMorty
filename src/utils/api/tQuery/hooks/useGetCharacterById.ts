import { useQuery } from '@tanstack/react-query';

import { getCharacterById } from '../../axios/requests';

// eslint-disable-next-line style/max-len
export const useGetCharacterById = (id: string, settings?: QuerySettings<typeof getCharacterById>) =>
  useQuery({
    queryKey: ['getCharacterById', id, settings],
    queryFn: () => getCharacterById(id, { config: settings?.config }),
    ...settings?.options
  });
