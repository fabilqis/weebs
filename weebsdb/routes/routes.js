const models = require('../models/models').models
module.exports=function(app){


    app.get('/weebsdb/quotes', (req, res)=>{
        models.find({}, (err, quotes)=>{
            if (err)
            return res.send(err)
            res.json(quotes)
        })
    })

    app.get('/weebsdb/quotes/:id', (req, res)=>{
        models.find({'_id':req.params.id}, (err,quotes)=>{
            if(err)
            return res.send(err)
            res.json(quotes)
        })
    })

    app.post('/weebsdb/quotes/add', (req, res)=>{
        const quotes = new models()
        quotes.email = req.body.email
        quotes.password = req.body.password
        quotes.quote = req.body.quote
        quotes.figure = req.body.figure

        console.log(req.body.figure)
        quotes.save((err, quotes)=>{
            if(err)
            return res.send(err)
            res.json({'status':'OK!', data:quotes})
        })
    })

    app.put('/weebsdb/quotes/edit', (req, res)=>{
        models.findById(req.body.id,(err,quotes)=>{
            if(err)
            return res.send(err)
            quotes.email=req.body.email
            quotes.password=req.body.password
            quotes.quote=req.body.quote
            quotes.figure=req.body.figure

            quotes.save((err, quotes)=>{
                if(err)
                return res.send(err)
                res.json({'status':'OK!',data:quotes})
            })
        })
    })

    app.delete('/weebsdb/quotes/delete/:id', (req, res)=>{
        models.findById(req.params.id, (err, quotes)=>{
            if(err)
            return res.send(err)
            quotes.remove((err)=>{
                if(err)
                return res.send(err)
                res.json({'status':'OK!'})
            })
        })
    })
}