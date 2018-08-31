const simpleChain = require('./simpleChain');
const express = require('express');
const app = express();

const Block = simpleChain.Block;
let blockchain = new simpleChain.Blockchain();

app.use(express.json());

app.get('/block/:blockHeight', (req, res) => {

    let blockHeight = req.params.blockHeight;
    if (isNaN(parseInt(blockHeight)))
        res.send('Not a number!. Please insert a valid block height number!');
    else if (blockHeight <= blockchain.blockHeight && blockHeight > -1)
        blockchain.getBlock(req.params.blockHeight).then(block => {
            res.send(block);
        });
    else
        res.send('Invalid block height number!. Please try again! ');
});

app.post('/block', (req, res) => {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send("Post body is missing!");
    }
    else if ("body" in req.body) {
        blockchain.addBlock(new Block(req.body.body)).then(result => {
            if (result == "success")
                blockchain.getBlock(blockchain.blockHeight).then(block => {
                    res.send(block);
                });
        }).catch( err =>{
            console.log(err);
        });
    }
    else
        res.send("No body key exist!");
});

app.listen(8000);