import { getHeroes } from '../utils/Api';

import {
  REQUEST_HERO_LIST,
  RECEIVE_HERO_LIST,
  RECEIVE_HERO_LIST_EMPTY
} from './types';

export const requestHeroList = page => (
  { type: REQUEST_HERO_LIST, payload: page }
);

export const receiveHeroList = heroes => (
  { type: RECEIVE_HERO_LIST, payload: heroes }
);

export const receiveHeroEmpty = () => (
  { type: RECEIVE_HERO_LIST_EMPTY }
);

export default accountId => (
  (dispatch) => {
    dispatch(requestHeroList());

    return getHeroes(accountId)
    .then((data) => {
      if (data.length === 0) {
        dispatch(receiveHeroEmpty());
      } else {
        dispatch(receiveHeroList(data));
      }
    })
    .catch((error) => {
      console.log(error);
      console.log('Action - FETCH HEROES ERROR');
      dispatch(receiveHeroEmpty());
    });
  }
);

