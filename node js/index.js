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
  })

  .get('/post', function(req, res){
    stronk = req;
    console.log(stronk);
    res.send({alpha : 'jewis'});
  })
  
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

let stronk;
//uselles coment