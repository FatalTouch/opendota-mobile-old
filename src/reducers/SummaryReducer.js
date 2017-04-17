import {
  REQUEST_PLAYER_SUMMARY,
  RECEIVE_PLAYER_SUMMARY,
  RECEIVE_PLAYER_SUMMARY_EMPTY
} from '../actions/types';

const INITIAL_STATE = { isFetching: false, isSummaryEmpty: false, summary: {} };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_PLAYER_SUMMARY:
      return { ...state, isFetching: true };
    case RECEIVE_PLAYER_SUMMARY:
      return { ...state, summary: action.payload, isSummaryEmpty: false, isFetching: false };
    case RECEIVE_PLAYER_SUMMARY_EMPTY:
      return { ...state, isSummaryEmpty: true, isFetching: false };
    default:
      return state;
  }
};
