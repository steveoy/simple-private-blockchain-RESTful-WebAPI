const Blockchain = require('./simpleChain');
const express = require('express');
const app = express();


let blockchain = new Blockchain();



app.get('/block/:blockHeight', (req, res) => {

    blockchain.getBlockHeight().then(function (height) {
        let blockHeight = req.params.blockHeight;
        if (isNaN(parseInt(blockHeight)))
            res.send('Not a number!. Please insert a valid block height number!');
        else if (blockHeight <= height && blockHeight > -1)
            blockchain.getBlock(req.params.blockHeight).then(function (block) {
                res.send(block);
            });
        else
            res.send('Invalid block height number!. Please try again! ');
    }); 
});



app.listen(8000);