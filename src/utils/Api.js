import axios from 'axios';
import _ from 'lodash';

const apiUrl = 'https://api.opendota.com/api/';
const matchLimit = 30;

// Function to get data from api by passing an endpoint
function fetchFromApi(endpoint) {
  const url = apiUrl + endpoint;
  return (
    axios.get(url)
    .then(response => response.data)
  );
}

export const searchPlayers = text => (fetchFromApi(`search?q=${text}`));

export const getMatches = accountId => (fetchFromApi(`players/${accountId}/matches?limit=${matchLimit}`));

export const getSummary = (accountId) => {
  const stats = fetchFromApi(`players/${accountId}`);
  const wl = fetchFromApi(`players/${accountId}/wl`);
  return Promise.all([stats, wl]).then(() => _.merge(wl, stats));
};

export default {
  searchPlayers
};
