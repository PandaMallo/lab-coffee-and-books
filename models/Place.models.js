const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const placeSchema = new Schema({
    name: String,
    type: {
        type: String,
        enum: ['coffee shop', 'book shop']
    },
    location: {
        type: {
            type: String
        },
    coordinates: [Number]
    }
},{
        timestamps: true
    })

    const Place = mongoose.model("Places", placeSchema);

    module.exports = Place