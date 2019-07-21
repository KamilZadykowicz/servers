import axios from 'axios';

const serversUrl = process.env.REACT_APP_URL_API;

export const fetchServers = () =>
  axios
    .get(serversUrl)
    .then(response => {
      const servers = response.data;
      return servers;
    })
    .catch(error => {
      console.log(error.message);
    });

export const fetchOneServer = id =>
  axios
    .get(`${serversUrl}/${id}`)
    .then(response => {
      const server = response.data;
      return server;
    })
    .catch(error => {
      console.log(error.message);
    });

export const turnOnServer = id =>
  axios
    .put(`${serversUrl}/${id}/on`)
    .then(response => {
      const server = response.data;
      return server;
    })
    .catch(error => {
      console.log(error);
    });

export const turnOffServer = id =>
  axios
    .put(`${serversUrl}/${id}/off`)
    .then(response => {
      const server = response.data;
      return server;
    })
    .catch(error => {
      console.log(error);
    });

export const rebootServer = id =>
  axios
    .put(`${serversUrl}/${id}/reboot`)
    .then(response => {
      const server = response.data;
      return server;
    })
    .catch(error => {
      console.log(error);
    });
