const http = require('http')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))

  .get('/get', function(req, res){
    res.send('hello');
    res.end();
  })

  .get('/post', function(req, res){
    res.send('contact-successful');
  })
  
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

//uselles coment