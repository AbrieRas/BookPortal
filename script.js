const localGet = () => {
    const url = 'http://localhost:3000/items';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
};

const localUpdate = () => {
    const url = 'http://localhost:3000/items/1';
    const params = { name: 'New Item 1' };
    const method = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    };

    fetch(url, method)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
};

const serverGet = () => {
    const url = 'https://shiny-glorious-squirrel.glitch.me/items';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
};

const serverUpdate = () => {
    const url = 'https://shiny-glorious-squirrel.glitch.me/items/1';
    const params = { name: 'New Item 1' };
    const method = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    };

    fetch(url, method)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
};

const addEventListenersToButtons = () => {
    const localGetButton = document.getElementById('local-get');
    const localUpdateButton = document.getElementById('local-update');
    const serverGetButton = document.getElementById('server-get');
    const serverUpdateButton = document.getElementById('server-update');

    localGetButton.addEventListener('click', localGet);
    localUpdateButton.addEventListener('click', localUpdate);
    serverGetButton.addEventListener('click', serverGet);
    serverUpdateButton.addEventListener('click', serverUpdate);
};

addEventListenersToButtons();
