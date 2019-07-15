import axios from 'axios';

const serversUrl = 'http://localhost:4454/servers'

export const fetchServers = () => axios.get(serversUrl)
.then(response => {
    const servers = response.data;
    return servers;
});