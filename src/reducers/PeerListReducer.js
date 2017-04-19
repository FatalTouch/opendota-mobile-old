import _ from 'lodash';

import {
  REQUEST_PEER_LIST,
  RECEIVE_PEER_LIST,
  RECEIVE_PEER_LIST_EMPTY
} from '../actions/types';

const INITIAL_STATE = { isFetching: false, isPeerListEmpty: false, peerList: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_PEER_LIST: {
      return { ...state, isFetching: true, peerList: [] };
    }
    case RECEIVE_PEER_LIST:
      return {
        ...state,
        peerList: _.concat(state.peerList, action.payload),
        isPeerListEmpty: false,
        isFetching: false
      };
    case RECEIVE_PEER_LIST_EMPTY:
      return { ...state, isPeerListEmpty: true, isFetching: false };
    default:
      return state;
  }
};
