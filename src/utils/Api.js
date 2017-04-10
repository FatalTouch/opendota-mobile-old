import axios from 'axios';

const apiUrl = 'https://api.opendota.com/api/';

export const searchPlayers = (text) => {
  const url = `${apiUrl}search?q=${text}`;

  return (
    axios.get(url)
    .then(response => response.data)
  );
};

export default {
  searchPlayers
};
