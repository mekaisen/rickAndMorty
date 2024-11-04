import { api } from '../../api';

type GetCharacterConfig = RequestConfig | void;

export const getCharacterById = (id: string, requestConfig?: GetCharacterConfig) => api.get<Character>(`/character/${id}`, requestConfig?.config);
