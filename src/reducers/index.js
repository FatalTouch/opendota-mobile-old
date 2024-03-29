import { combineReducers } from 'redux';
import search from './SearchReducer';
import matchList from './MatchListReducer';
import playerSummary from './SummaryReducer';
import peerList from './PeerListReducer';
import heroList from './HeroListReducer';

export default combineReducers({
  search,
  matchList,
  peerList,
  playerSummary,
  heroList
});
