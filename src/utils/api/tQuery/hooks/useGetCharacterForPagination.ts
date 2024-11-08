import { useInfiniteQuery } from '@tanstack/react-query';

import { getPage } from '@/utils/func/getPage';

import { getCharacterForPagination } from '../../axios/requests/characterForPagination';

export const useGetCharacterForPagination = (
  setting?: QuerySettings<typeof getCharacterForPagination>
) =>
  useInfiniteQuery({
    queryKey: ['getCharacterForPagination', setting],
    queryFn: (meta) => getCharacterForPagination(meta.pageParam, { config: setting?.config }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const nextPage = getPage(lastPage.data.info?.next);
      return nextPage;
    },
    select: (result) => result.pages.flatMap((item) => item.data.results),
    ...setting?.options
  })
;
