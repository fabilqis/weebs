const bodyparser = require("body-parser");
var {check, validationResult} = require("express-validator/check")
const bcrypt = require("bcrypt");
const models = require('../models/models');
module.exports=function(app){
    const regValidation = [
        check("username")
        .isLength({ min: 2}),
        check("email")
        .isEmail(),
        check("password")
        .not()
        .isEmpty()
        .isLength({min : 6}),
        check("yourwishes")
        .isLength({min:2}),
        check(
            "password_con",
            "Password confirmation is required as password")
            .custom(function(value,{req}){
                if (value!== req.body.password){
                    throw new Error("Please up to 6 character");
                }
                return value;
            }),
            check("email").custom(value => {
                return models.findOne({email:value}).then(function(modelemail){
                    if (modelemail){
                        throw new Error("This email is already exist");
                    }
                })
            })
        ]

        function register(req, res){
            var errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.send({errors: errors.mapped()});
            }
            var modelemail = new models(req.body);
            modelemail.password = modelemail.hashPassword(modelemail.password);
            modelemail
            .save()
            .then(modelemail =>{
                return res.json(modelemail);
            })
            .catch(err => ress.send(err));
        }

    app.post("/api/register", regValidation, register);
    app.get("/", (req, res) =>  req.json("Get weebs"));
    const logValidation = [
        check("email")
        .not()
        .isEmpty(),
        check("password")
        .not()
        .isEmpty()
    ]

    function loginUser(req, res) {
        var errors= validationResult(req);
        if(!errors.isEmpty()){
            return res.send({errors: errors.mapped()});
        }
        models.findOne({
            email: req.body.email
        })
        .then(function(modelemail){
            if(!modelemail){
                return res.send({error: true, message: "User does not exist!"});
            }
            if(!modelemail.comparePassword(req.body.password, modelemail.password)){
                return res.send({error: true, message:"Wrong password"});
            }
            req.session.modelemail= modelemail;
            req.session.isLoggedIn = true;
            return res.send({message: "You are signed in"});
            res.send(modelemail);
        })
        .catch(function(error){
            console.log(error);
        });
    }

        app.post("/api/login", logValidation, loginUser);
        function isLoggedIn(req, res, next) {
        if (req.session.isLoggedIn) {
            res.send(true);
        } else {
            res.send(false);
        }
        }
        app.get("/api/isloggedin", isLoggedIn);


        app.get("/api/logout", (req, res) => {
            req.session.destroy();
            res.send({ message: "Logged out!" });
        });

    //   app.post('/weebsdb/quotes/add', (req, res)=>{
    //     const quotes = new models()
    //     quotes.quote = req.body.quote
    //     quotes.figure = req.body.figure

    //     console.log(req.body.figure)
    //     quotes.save((err, quotes)=>{
    //         if(err)
    //         return res.send(err)
    //         res.json({'status':'OK!', data:quotes})
    //     })
    // })

    app.get('/weebsdb/quotes', (req, res)=>{
        models.find({}, (err, quotes)=>{
            if (err)
            return res.send(err)
            res.json(quotes)
        })
    })

    // app.get('/weebsdb/quotes/:id', (req, res)=>{
    //     models.find({'_id':req.params.id}, (err,quotes)=>{
    //         if(err)
    //         return res.send(err)
    //         res.json(quotes)
    //     })
    // })

    // app.put('/weebsdb/quotes/edit', (req, res)=>{
    //     models.findById(req.body.id,(err,quotes)=>{
    //         if(err)
    //         return res.send(err)
    //         quotes.quote=req.body.quote
    //         quotes.figure=req.body.figure

    //         quotes.save((err, quotes)=>{
    //             if(err)
    //             return res.send(err)
    //             res.json({'status':'OK!',data:quotes})
    //         })
    //     })
    // })

    // app.delete('/weebsdb/quotes/delete/:id', (req, res)=>{
    //     models.findById(req.params.id, (err, quotes)=>{
    //         if(err)
    //         return res.send(err)
    //         quotes.remove((err)=>{
    //             if(err)
    //             return res.send(err)
    //             res.json({'status':'OK!'})
    //         })
    //     })
    // });
};