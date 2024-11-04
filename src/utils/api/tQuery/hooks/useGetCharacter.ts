import { useQuery } from '@tanstack/react-query';

import { getCharacter } from '../../axios/requests';

export const useGetCharacter = (settings?: QuerySettings<typeof getCharacter>) =>
  useQuery({
    queryKey: ['getCharacter', settings],
    queryFn: () => getCharacter(),
    ...settings?.options
  });
