import { Props as Trailer } from './Trailer'

export const receivedTrailers = (trailers: Trailer[]) => ({
  type: 'ReceivedTrailers' as const,
  payload: trailers
})

export const displayTrailer = (id: number) => ({
  type: 'DisplayTrailer' as const,
  payload: {
    id
  }
})

export const hideTrailer = (id: number) => ({
  type: 'HideTrailer' as const,
  payload: {
    id
  }
})

export type TrailerActionTypes = ReturnType<typeof displayTrailer | typeof hideTrailer | typeof receivedTrailers>
