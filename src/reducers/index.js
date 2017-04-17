import { combineReducers } from 'redux';
import search from './SearchReducer';
import matchList from './MatchListReducer';
import playerSummary from './SummaryReducer';

export default combineReducers({
  search,
  matchList,
  playerSummary
});
