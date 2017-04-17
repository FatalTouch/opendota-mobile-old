import { getSummary } from '../utils/Api';

import {
  REQUEST_PLAYER_SUMMARY,
  RECEIVE_PLAYER_SUMMARY,
  RECEIVE_PLAYER_SUMMARY_EMPTY
} from './types';

export const requestSummary = () => (
  { type: REQUEST_PLAYER_SUMMARY }
);

export const receivePlayerSummary = data => (
  { type: RECEIVE_PLAYER_SUMMARY, payload: data }
);

export const receivePlayerSummaryEmpty = () => (
  { type: RECEIVE_PLAYER_SUMMARY_EMPTY }
);

export default accountId => (
  (dispatch) => {
    dispatch(requestSummary());

    return getSummary(accountId)
    .then((data) => {
      if (data.length === 0) {
        dispatch(receivePlayerSummaryEmpty());
      } else {
        dispatch(receivePlayerSummary(data));
      }
    })
    .catch((error) => {
      console.log(`Action - FETCH SUMMARY ERROR - ${error}`);
      dispatch(receivePlayerSummaryEmpty());
    });
  }
);
