var huejay = require('huejay');
var express = require('express');
var router = express.Router();
let host;

router.get('/', (req, res) => {
    huejay.discover()
        .then((bridges) => {
            console.log(bridges);
            host = bridges.ip;
            res.json(bridges); })
        .catch((error) => console.error(error));
});

module.exports = {
    router: router,
    host: (host === undefined ? "192.168.1.3" : host)
}