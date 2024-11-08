import { useQuery } from '@tanstack/react-query';

import { getCharacterById } from '../../axios/requests';

// eslint-disable-next-line style/max-len
export const useGetCharacterById = (id: string, settings?: QuerySettings<typeof getCharacterById>) =>
  useQuery({
    queryKey: ['getCharacterById', id, settings],
    queryFn: (meta) => {
      const reqSettings = { config: { ...settings?.config, signal: meta.signal } };
      return getCharacterById(id, { config: reqSettings.config });
    },
    ...settings?.options
  });
