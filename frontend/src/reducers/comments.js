import * as types from '../constants/ActionTypes'

const initialState = {
  isFetching: false,
  items: {}
}

const comments = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_GET_COMMENTS :
    case types.REQUEST_UPVOTE_COMMENT :
    case types.REQUEST_UPDATE_COMMENT :
    case types.REQUEST_DOWNVOTE_COMMENT :
      return {
        ...state,
        isFetching: true
      }
    case types.RECEIVE_GET_COMMENTS :
      return {
        ...state,
        isFetching: false,
        items: action.comments
      }
    case types.RECEIVE_UPVOTE_COMMENT :
    case types.RECEIVE_DOWNVOTE_COMMENT :
    case types.RECEIVE_UPDATE_COMMENT :
      return {
        ...state,
        isFetching: false,
        items: {
          ...state.items,
          [action.comment.id]: action.comment
        }
      }
    default:
      return state
  }
}

export default comments
