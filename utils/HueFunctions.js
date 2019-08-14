let hue = require('node-hue-api');
let hueApi = require('node-hue-api').HueApi;
let api;

export const displayBridges = (bridge) => {
    console.log("Bridges found: " + JSON.stringify(bridge));
};

export const displayResult = (result) => {
    console.log(JSON.stringify(result, null, 2));
};

const displayError = (error) => {
    console.error(error);
};

// Discover bridges
export const searchBridges = () => {
    hue.nupnpSearch((err, result) => {
        if (err) throw err;
        displayBridges(result);
    });
};

// Configure new connection
export const config = (host, username) => {
    api = new hueApi(host, username);
    api.config().then(displayResult).done();
    api.getConfig().then(displayResult).done();
};

// Configure new user
export const configNewUser = (host) => {
    return hue.createUser(host, (err, user) => {
        if (err) throw err;
        config(host, user);
    });
};

// Register user app on bridge
export const registerUser = (host, desc) => {
    return hue.registerUser(host, desc)
        .then(displayResult)
        .then((result) => {
            return result
        })
        .fail(displayError)
        .done();
};

// Configure hue api config

// Get all lights on bridge
export const getLights = () => {
    return api.lights()
        .then(displayResult)
        .done();
};

// Get all rooms/groups on bridge
export const getGroups = () => {
    return api.groups()
        .then(displayResult)
        .done();
};

export const getGroup = (index) => {
    return api.getGroup(index)
        .then(displayResult)
        .done();
}
