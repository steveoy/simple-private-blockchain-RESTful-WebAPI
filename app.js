const simpleChain = require('./simpleChain');
const Joi = require('joi');
const express = require('express');
const app = express();

const Block = simpleChain.Block;
const blockchain = new simpleChain.Blockchain();

app.use(express.json());

app.get('/block/:blockHeight', (req, res) => {
    const schema = {
        blockHeight: Joi.number().integer().min(0).max(blockchain.blockHeight).required()
    }
    const { error } = Joi.validate(req.params, schema);
    if (error) return res.status(400).send(error.details[0].message);

    blockchain.getBlock(req.params.blockHeight).then(block => {
        res.send(block);
    });
});

app.post('/block', (req, res) => {
    const schema = {
        body: Joi.string().min(3).required()
    }
    const { error } = Joi.validate(req.body, schema);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }

    blockchain.addBlock(new Block(req.body.body)).then(result => {
        if (result == "success")
            blockchain.getBlock(blockchain.blockHeight).then(block => {
                res.send(block);
            });
    }).catch(err => {
        console.log(err);
    });
});

app.listen(8000);