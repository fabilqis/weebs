const mongoose = require('mongoose')
const Scheme = mongoose.Schema
const bcrypt = require("bcrypt")

const WeebsScheme = new Scheme({
    username :{
        type : String,
        require: true
    },
    email : {
        type: String,
        require: true    
    },
    password : {
        type : String,
        require : true
    },
    yourwishes : {
        type: String,
        require : true
    },
    quote : {
        type : String,
        require : true
    },
    figure : {
        type : String,
        require : true
    }


    // radio : {
    //     type : Boolean,
    //     require: true
    // }

})

WeebsScheme.methods.hashPassword = function(password){
    return bcrypt.hashSync(password,12);
};
WeebsScheme.methods.comparePassword = function(password, hashPassword){
    return bcrypt.compareSync(password, hashPassword);
}

module.exports = models = mongoose.model("models", WeebsScheme);