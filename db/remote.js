const fetch = require('node-fetch');

function createRemoteDB(host, port) {
    const URL = `http://${host}:${port}`;

    async function list(table) {
        const response = await fetch(`${URL}/${table}`);
        const data = await response.json();
        return data;
    }

    return {
        list,
    }
}

module.exports = createRemoteDB