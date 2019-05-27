const fs =  require('fs')
const mongo = require('mongodb')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

//let mongoUrl = "mongodb+srv://gluser:tajneheslo@glcluster-nzu7u.mongodb.net/test?retryWrites=true"
let data = fs.readFileSync('data.json')
let json = JSON.parse(data);

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))

  .get('/get', function(req, res){
    res.send({some : "other"});
  })

  .get('/db',function(req, res){
      console.log(data)
      console.log(json)
      res.send("haha")
  })

  .post('/post', function(req, res){
    res.send('contact-successful');
  })
  
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

//uselles coment