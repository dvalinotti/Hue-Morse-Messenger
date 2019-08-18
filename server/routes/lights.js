let express = require('express');
let huejay = require('huejay');
let router = express.Router();

router.get('/', (req, res) => {
    hueClient.lights.getAll()
        .then((lights) => {
            res.json(lights);
        }).catch((error) => console.log(error.stack));
});

router.get('/:id/', (req, res) => {
    hueClient.lights.getAll()
        .then((lights) => {
            let light = lights[req.params.id];

            light.on = true;

            console.log('turning on ' + light.name);
            hueClient.lights.save(light);
            res.json({
                "id": req.params.id,
                "state": "on"
            });
        }).catch((error) => res.json(error));
});

router.get('/toggle/:id', (req, res) => {
    hueClient.lights.getAll()
        .then((lights) => {
            let light = lights[req.params.id];

            let state = light.on;
            light.on = !state;
            hueClient.lights.save(light);
            res.json({
                "id": req.params.id,
                "state": light.on
            });
        }).catch((error) => res.json({"error": error.message}));
});

module.exports = router;