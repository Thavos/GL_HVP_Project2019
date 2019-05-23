const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express();

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

app.get('/', function (req, res) {
  console.log("Hello World");
  res.send({some : "json"});
})

app.post('/', function (req, res) {
  console.log("Hello porld");
  res.send({some : "other"});
})

//uselles coment