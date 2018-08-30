
## Express RESTful web API for private blockchain. 
The API project include two endpoints:

Get block

Post block

## For Testing Please Follow Below Steps, please do first "npm install"

1: Enter a node session
```
node
```
2: Load simpleChain.js file within node session
```
.load simpleChain.js
```
3: Create New Blockchain
```
let blockchain = new Blockchain();
```
4: Generate 10 blocks using generateBlocks()
```
blockchain.generateBlocks();
```
5: Validate blockchain
```
blockchain.validateChain();
blockchain.printErrorLog();
```
6: Induce errors by changing block data using induceErrors()
```
blockchain.induceErrors([2,4,7])
```
7: Validate blockchain. The chain should now fail with blocks 2,4, and 7.
```
blockchain.validateChain();
blockchain.printErrorLog();
```
