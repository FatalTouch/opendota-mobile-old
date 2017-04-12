import { combineReducers } from 'redux';
import search from './SearchReducer';
import matchList from './MatchListReducer';

export default combineReducers({
  search,
  matchList
});
