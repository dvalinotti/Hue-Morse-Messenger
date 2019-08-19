let express = require('express');
let huejay = require('huejay');
let router = express.Router();
let host = require('./register').host;

router.post('/', (req, res) => {
    client.users.getAll().then((users) => {
        for (let user of users) {
            console.log(user);
        }
    }).catch((error) => console.log(error.stack));
    let users = client.users.get()
        .then((user) => {
            if (user.username === req.username) {
                console.log('Successfully authentciated user');
                res.json({
                    username: req.username,
                    authenticated: true
                });
            } else {
                console.log('Authentication failed');
                res.json({
                    username: req.username,
                    authenticated: false
                });
            }
        }).catch((error) => console.log(error.stack));
});

module.exports = router;