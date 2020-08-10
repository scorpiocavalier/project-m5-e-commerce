import { ACTIONS } from './actions';

export const shopReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_STATE:
      return { ...state, ...action.payload.newState }
    case ACTIONS.SET_STATUS:
      return { ...state, status: action.payload.status }
    default:
      return state
  }
}