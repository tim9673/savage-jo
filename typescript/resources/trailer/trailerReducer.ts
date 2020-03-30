import { EntityState, removeEntityFromNormalized, denormalizeArray, normalizeArray } from '../utils'
import { Props as Trailer } from './Trailer'
import { TrailerActionTypes } from './trailerAction'
import { createSelector } from 'reselect'
import { StateType } from '../store'

const initialState: EntityState<Trailer> = {
  byId: {}
}

export const trailerReducer = (state = initialState, action: TrailerActionTypes) => {
  switch (action.type) {
    case 'DisplayTrailer':
    case 'HideTrailer':
      const displayById = {
        ...state.byId,
        [action.payload.id]: {
          ...state.byId[action.payload.id],
          visibility: action.type === 'DisplayTrailer'
        }
      }
      return { ...state, byId: displayById }

    case 'ReceivedTrailers':
      const [byId, allIds] = normalizeArray(state.byId, action.payload)
      return { ...state, byId, allIds }

    default:
      return state
  }
}

export const getAllTrailers = createSelector(
  (state: StateType) => state.trailer.byId,
  (state: StateType) => state.trailer.allIds,
  (byId, allIds) => denormalizeArray(byId, allIds)
)
