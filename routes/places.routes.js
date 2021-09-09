const router = require("express").Router();

const Places = require('../models/Place.models')


//Create
router.get('/new-places', (req, res) => res.render('places/new-places'))

router.post('/new-places',(req, res) =>{
    const {name, type, lat, lng} = req.body

if (name.length === 0 || type.length === 0) {
    res.render('places/new-places', { errorMsg: 'All Fields Must be Completed' })
     return
 }
    const location ={type: 'Point', coordinates:[lat, lng]}

    Places
    .create({name, type, location})
    .then(thePlace => res.redirect('/places/new-places'))
    .catch(err => console.log(err))
})

//Read
router.get('/places-list', (req, res) => {
    
    Places
    .find()
    .then(places =>res.render('places/places-list', {places}))
    .catch(err => console.log(err))
})

//Maps
router.get('/maps', (req, res) => res.render('places/maps'))

//Delete
router.post('/delete/:id', (req,res) => {
    
    const {id} = req.params

    Places
    .findByIdAndDelete(id)
    .then(() =>res.redirect('/places/new-places'))
    .catch(err => console.log(err))
} )

module.exports = router;
