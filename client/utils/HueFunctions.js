const discoverBridges = () => {
    return fetch("https://discovery.meethue.com")
        .then((results) => results.json())
        .then((resultsJson) => {
            return resultsJson;
        })
        .catch((error) => console.error(error.message));
}

const configureBridge = (bridge) => {
    return fetch('https://light-badger-53.localtunnel.me/api', {
        method: 'POST',
        headers: {
            Accept: 'multipart/form-data',
            'Content-Type': 'multipart/form-data',
          },
        body: JSON.stringify({
            devicetype: "fuck#iphone me"
        })})
        .then((results) => {
            return results.json();
        })
        .then((resultsJson) => {
            return resultsJson;
    }).catch((error) => console.log(error));
}

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
    configureBridge: configureBridge
}