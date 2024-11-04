type RequestConfig<Params = undefined> = Params extends undefined
  ? { config?: import('axios').AxiosRequestConfig }
  : { params: Params; config?: ApiRequestConfig };

type ApiRequestConfig = import('axios').AxiosRequestConfig;

interface QuerySettings<Func = unknown> {
  config?: ApiRequestConfig;
  options?: Omit<
    import('@tanstack/react-query').UseQueryOptions<
      Awaited<ReturnType<Func>>,
      any,
      Awaited<ReturnType<Func>>,
      any
    >,
    'queryKey'
  >;
}
interface CharacterLocation {
  name: string
  url: string
}
interface ResourceBase {
  id: number
  name: string
  url: string
  created: string
}

interface Endpoints {
  character: string
  location: string
  episode: string
}

interface CharacterFilter {
  name?: string
  type?: string
  species?: string
  /**
   * 'Dead' | 'Alive' | 'unknown'
   */
  status?: string
  /**
   * 'Female' | 'Male' | 'Genderless' | 'unknown'
   */
  gender?: string
  page?: number
}

interface LocationFilter extends Pick<CharacterFilter, 'name' | 'type' | 'page'> {
  dimension?: string
}

interface EpisodeFilter extends Pick<CharacterFilter, 'name' | 'page'> {
  /**
   * Filter by the given episode code.
   * i.e: `{ episode: "S01E01" }`
   */
  episode?: string
}

interface Character extends ResourceBase {
  status: 'Dead' | 'Alive' | 'unknown'
  species: string
  type: string
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown'
  origin: CharacterLocation
  location: CharacterLocation
  image: string
  episode: string[]
}

interface Location extends ResourceBase {
  type: string
  dimension: string
  residents: string[]
}

interface Episode extends ResourceBase {
  air_date: string
  episode: string
  characters: string[]
}

interface ApiResponse<T> {
  /** The HTTP status code from the API response */
  status: number
  /** The HTTP status message from the API response */
  statusMessage: string
  /** The response that was provided by the API */
  data: T
}

interface Info<T> {
  /**
   * The API will automatically paginate the responses. You will receive up to `20` documents per page.
   */
  info?: {
    /** The length of the response */
    count: number
    /** The amount of pages */
    pages: number
    /** Link to the next page (if it exists) */
    next: string | null
    /** Link to the previous page (if it exists) */
    prev: string | null
  }
  results?: T
}
