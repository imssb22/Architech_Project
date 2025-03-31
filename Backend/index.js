const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const port = 3000

app.use(bodyParser.json())
function middleware1(req, res, next){
    console.log("from inside the middleware " + req.headers.counter);
    next();
}
app.use(middleware1);
// app.get('/', (req, res) => {
//   res.send('Hello World!')
  
// })
function summ(req, res){
    var counter = req.query.counter;
    // console.log(req.body)
    // var counter = req.body.counter;
    var calculatedSum = sum(counter);
    console.log(calculatedSum);
    var ans = "the answer is " + calculatedSum;
    res.send(ans);
}
function htmlsender(req, res){
  res.send(`<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>
      <body>
          <b>hey there folks</b>
      </body>
      </html>`)
}
app.get('/html', htmlsender)
app.get('/handlesum', summ);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
function sum (counter) {
    let count = 0;
    for(var i = 0; i < counter; i++){
        count += i;
    }
    return count;
}
