export const discoverBridges = () => {
    return fetch("https://discovery.meethue.com")
        .then((results) => {
            return results.json();
        }).catch((error) => console.error(error.message));
}

export const configureBridge = (bridge) => {
    console.log(bridge);
    console.log('HERE');
    return fetch(`http://${bridge.internalipaddress}/api`, {
        method: 'post',
        body: JSON.stringify({
            deviceType: "hue_morse#iphone me"
        })}).then((response) => {
            return response.json();
        }).catch((error) => console.log(error));
}