let express = require('express');
let huejay = require('huejay');
let router = express.Router();
let host = require('./discover').host;
global.hueClient = new huejay.Client({
    host: host,
    timeout: 15000
});
let user;

router.post('/', (req, res) => {
    user = new hueClient.users.User;
    user.deviceType = 'hue_morse_app';

    hueClient.users.create(user)
        .then((user) => {
            console.log(`New user created: ${user.username}`);
            hueClient.username = user.username;
            res.json({
                username: user.username,
                deviceType: user.deviceType,
                createDate: user.createDate,
                lastUsed: user.lastUsed,
                hueClient: hueClient.config
            });
        })
        .catch((error) => {
            if (error instanceof huejay.Error && error.type === 101) {
                console.log('Link button not pressed. Please try again');
                res.json({
                    errorCode: 101,
                    errorMessage: "Please press the link button and try again"
                });
            }

            console.log(error.stack);
        });
});

module.exports = {
    router: router,
    hueClient: hueClient
};