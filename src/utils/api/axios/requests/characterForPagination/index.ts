import { api } from '../..';

type getCharacterForPaginationProps = RequestConfig | void;

export const getCharacterForPagination = (pageParam: number, requestConfig?: getCharacterForPaginationProps) => api.get<Info<Character[]>>(`/character/?page=${pageParam}`, requestConfig?.config);
