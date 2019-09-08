import * as Expo from 'expo';
import {config} from '../Constants';
import Constants from 'expo-constants';
const { manifest } = Constants.manifest;
import { compose } from 'react-apollo'

const getApi = async function() {
    let api = await ( manifest.debuggerHost.split(`:`).shift().concat(`:2020`));

    return api;
}

const discoverBridges = () => {
    return fetch("https://discovery.meethue.com")
        .then((results) => results.json())
        .then((resultsJson) => {
            return resultsJson;
        })
        .catch((error) => console.error(error.message));
}

// const configureBridge = (bridge) => {
//     return fetch(`https://${config.ip}/api`, {
//         method: 'POST',
//         body: JSON.stringify({
//             devicetype: "fuck#iphone me"
//         })})
//         .then((results) => {
//             return results.json();
//         })
//         .then((resultsJson) => {
//             return resultsJson;
//     }).catch((error) => console.log(error));
// }

// const getLights = (username) => {
//     return fetch(`https://${config.ip}/api/${username}/lights`, { method: 'GET' })
//         .then((results) =>  results.json() )
//         .then((response) => {
//             console.log(response);
//             return response;
//         })
//         .catch((error) => console.log(error));
// }



// export const configureBridge = (bridge) => {
//     console.log(bridge);
//     console.log('HERE');
//     return fetch(`http://${bridge.internalipaddress}/api`, {
//         method: 'post',
//         body: JSON.stringify({
//             deviceType: "hue_morse#iphone me"
//         })}).then((response) => {
//             return response.json();
//         }).catch((error) => console.log(error));
// }

module.exports = {
    discoverBridges: discoverBridges,
    // configureBridge: configureBridge,
    // getLights: getLights,
}