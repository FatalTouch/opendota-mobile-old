import _ from 'lodash';

import {
  REQUEST_MATCH_LIST,
  RECEIVE_MATCH_LIST,
  RECEIVE_MATCH_LIST_EMPTY,
  REQUEST_MATCH_LIST_NEW
} from '../actions/types';

const INITIAL_STATE = { isFetching: false, isMatchListEmpty: false, matchList: [] };

export default (state = INITIAL_STATE, action) => {
  console.log(action.type, 'payload value', action.payload, 'state value', state.matchList);
  switch (action.type) {
    case REQUEST_MATCH_LIST_NEW:
      return { ...state, matchList: [] };
    case REQUEST_MATCH_LIST:
      return { ...state, isFetching: true };
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
