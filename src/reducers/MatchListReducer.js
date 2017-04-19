import _ from 'lodash';

import {
  REQUEST_MATCH_LIST,
  RECEIVE_MATCH_LIST,
  RECEIVE_MATCH_LIST_EMPTY
} from '../actions/types';

const INITIAL_STATE = { isFetching: false, isMatchListEmpty: false, matchList: [], page: 0 };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_MATCH_LIST: {
      const matchList = action.payload === 0 ? [] : state.matchList;
      return { ...state, isFetching: true, page: action.payload + 1, matchList };
    }
    case RECEIVE_MATCH_LIST:
      return {
        ...state,
        matchList: _.concat(state.matchList, action.payload),
        isMatchListEmpty: false,
        isFetching: false
      };
    case RECEIVE_MATCH_LIST_EMPTY:
      return { ...state, isMatchListEmpty: true, isFetching: false };
    default:
      return state;
  }
};
