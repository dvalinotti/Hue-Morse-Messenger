let express = require('express');
let huejay = require('huejay');
let router = express.Router();

router.get('/', (req, res) => {
    hueClient.groups.getAll()
        .then((groups) => {
            res.json(groups);
        }).catch((error) => console.log(error.stack));
});

module.exports = router;