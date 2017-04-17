import { getMatches } from '../utils/Api';

import {
  REQUEST_MATCH_LIST,
  RECEIVE_MATCH_LIST,
  RECEIVE_MATCH_LIST_EMPTY,
  REQUEST_MATCH_LIST_NEW
} from './types';

export const requestMatchList = () => (
  { type: REQUEST_MATCH_LIST }
);

export const receiveMatchList = matches => (
  { type: RECEIVE_MATCH_LIST, payload: matches }
);

export const receiveMatchEmpty = () => (
  { type: RECEIVE_MATCH_LIST_EMPTY }
);

export const resetMatchList = () => (
  { type: REQUEST_MATCH_LIST_NEW }
);
export const requestMatchListNew = (accountId) => (
  (dispatch) => {

    dispatch(resetMatchList());
    dispatch(requestMatchList());
    return getMatches(accountId, 0)
      .then((data) => {
        if (data.length === 0) {
          dispatch(receiveMatchEmpty());
        } else {
          dispatch(receiveMatchList(data));
        }
      })
      .catch((error) => {
        console.log(error);
        console.log('Action - FETCH MATCHES ERROR');
        dispatch(receiveMatchEmpty());
      });
  }
);

export default (accountId, page) => (
  (dispatch) => {
    dispatch(requestMatchList());

    return getMatches(accountId, page)
      .then((data) => {
        if (data.length === 0) {
          dispatch(receiveMatchEmpty());
        } else {
          dispatch(receiveMatchList(data));
        }
      })
      .catch((error) => {
        console.log(error);
        console.log('Action - FETCH MATCHES ERROR');
        dispatch(receiveMatchEmpty());
      });
  }
);

