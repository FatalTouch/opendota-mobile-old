import axios from 'axios';
import _ from 'lodash';

const apiUrl = 'https://api.opendota.com/api/';
const matchLimit = 20;

// Function to get data from api by passing an endpoint
function fetchFromApi(endpoint) {
  const url = apiUrl + endpoint;
  return (
    axios.get(url)
      .then(response => response.data)
  );
}

let offset = 0 - matchLimit;

export const searchPlayers = text => (fetchFromApi(`search?q=${text}`));

export const getMatches = (accountId, newRequest) => {
  offset = newRequest ? 0 - matchLimit : offset + matchLimit;
  return fetchFromApi(`players/${accountId}/matches?limit=${matchLimit}&offset=${offset}`);
};

export const getSummary = (accountId) => {
  const stats = fetchFromApi(`players/${accountId}`);
  const wl = fetchFromApi(`players/${accountId}/wl`);
  return Promise.all([stats, wl]).then(() => _.merge(wl, stats));
};

export default {
  searchPlayers
};
