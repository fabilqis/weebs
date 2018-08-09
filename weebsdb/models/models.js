const mongoose = require('mongoose')
const Scheme = mongoose.Schema

const WeebsScheme = new Scheme({
    email : String,
    password : String,
    quote : String,
    figure : String
})

let models = mongoose.model('quotes', WeebsScheme, 'quotes', true)
module.exports.models = models