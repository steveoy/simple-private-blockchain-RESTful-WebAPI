
## Express RESTful web API for private blockchain. 
The API project file app.js include two endpoints:

Get block
```
app.get('/block/:blockHeight', (req, res) => {...});
```
Post block
```
app.post('/block', (req, res) => {...});
```

## For Testing Please Follow Below Steps, please do first "npm install"

1: Run the API using the terminal
```
node app.js
```
2: Establish a get block request using below URL, replace the {blockHeight} with a valid number
```
http://localhost:8000/block/{blockHeight}
```
3: Establish a post request using below URL. Include JSON body to add new block
```
http://localhost:8000/block
Request body: {"body":"block body contents"}
```



