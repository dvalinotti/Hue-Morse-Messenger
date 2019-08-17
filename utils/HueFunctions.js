export const discoverBridges = () => {
    return fetch("https://discovery.meethue.com")
        .then((results) => {
            return results.json();
        }).catch((error) => console.error(error.message));
}