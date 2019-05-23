const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/get', (req, res) => res.send({some : "json"}))
  .get('/post', (req, res) => res.write({some : "json"}))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

//uselles coment