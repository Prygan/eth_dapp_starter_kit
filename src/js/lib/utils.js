// Async function
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/async_function
async function initialiseWeb3 () {
    let web3provider = null;
    if (window.ethereum) {
        web3Provider = window.ethereum;
        try {
            // Request account access
            await window.ethereum.enable();
        } catch (error) {
            // User denied account access...
            console.error("User denied account access")
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
    web3Provider = window.web3.currentProvider;
    }
    // If no injected web3 instance is detected, fall back to Ganache
    else {
    web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
    }
    // Cet objet à utiliser pour toute interaction avec ethereum
    web3 = new Web3(web3Provider);

    return web3;
}