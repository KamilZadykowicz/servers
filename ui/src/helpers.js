import axios from 'axios';

const serversUrl = process.env.REACT_APP_URL_API;

export const fetchServers = () =>
  axios.get(serversUrl).then(response => {
    const servers = response.data;
    return servers;
  });

// export const fetchServers = () => axios.get(serversUrl)
// .then(response => {
//     const servers = response.data;
//     return servers;
// });
