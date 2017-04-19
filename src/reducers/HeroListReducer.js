import _ from 'lodash';

import {
  REQUEST_HERO_LIST,
  RECEIVE_HERO_LIST,
  RECEIVE_HERO_LIST_EMPTY
} from '../actions/types';

const INITIAL_STATE = { isFetching: false, isHeroListEmpty: false, heroList: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_HERO_LIST: {
      return { ...state, isFetching: true, heroList: [] };
    }
    case RECEIVE_HERO_LIST:
      return {
        ...state,
        heroList: _.concat(state.heroList, action.payload),
        isHeroListEmpty: false,
        isFetching: false
      };
    case RECEIVE_HERO_LIST_EMPTY:
      return { ...state, isHeroListEmpty: true, isFetching: false };
    default:
      return state;
  }
};
