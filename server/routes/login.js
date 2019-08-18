let express = require('express');
let huejay = require('huejay');
let router = express.Router();

router.post('/', (req, res) => {
    let users = hueClient.users.get()
        .then((user) => {
            if (user.username === undefined) {
                res.json({"error": "failed to authenticate user."})
            } 

            console.log('Successfully authentciated user');
            res.json({
                username: req.username,
                authenticated: true
            });
        }).catch((error) => console.log(error.stack));
});

module.exports = router;