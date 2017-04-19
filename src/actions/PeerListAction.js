import { getPeers } from '../utils/Api';

import {
  REQUEST_PEER_LIST,
  RECEIVE_PEER_LIST,
  RECEIVE_PEER_LIST_EMPTY
} from './types';

export const requestPeerList = page => (
  { type: REQUEST_PEER_LIST, payload: page }
);

export const receivePeerList = peers => (
  { type: RECEIVE_PEER_LIST, payload: peers }
);

export const receivePeerEmpty = () => (
  { type: RECEIVE_PEER_LIST_EMPTY }
);

export default accountId => (
  (dispatch) => {
    dispatch(requestPeerList());

    return getPeers(accountId)
    .then((data) => {
      if (data.length === 0) {
        dispatch(receivePeerEmpty());
      } else {
        dispatch(receivePeerList(data));
      }
    })
    .catch((error) => {
      console.log(error);
      console.log('Action - FETCH PEERS ERROR');
      dispatch(receivePeerEmpty());
    });
  }
);

