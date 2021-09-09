const router = require("express").Router()

const Places = require('../models/Place.models')

router.get('/places', (req, res) => {

    Places
        .find()
        .then(places => res.json(places))
        .catch(err => console.log(err))

})

module.exports = router