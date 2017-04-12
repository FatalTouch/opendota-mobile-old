import {
  REQUEST_MATCH_LIST,
  RECEIVE_MATCH_LIST,
  RECEIVE_MATCH_LIST_EMPTY
} from '../actions/types';

const INITIAL_STATE = { isFetching: false, isMatchListEmpty: false, matchList: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_MATCH_LIST:
      return { ...state, isFetching: true, matchList: [] };
    case RECEIVE_MATCH_LIST:
      return { ...state, matchList: action.payload, isMatchListEmpty: false, isFetching: false };
    case RECEIVE_MATCH_LIST_EMPTY:
      return { ...state, isMatchListEmpty: true, isFetching: false };
    default:
      return state;
  }
};
