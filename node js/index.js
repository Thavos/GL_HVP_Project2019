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
    let date = new Date();
    fs.readFile('data.json', 'utf8', function readFileCallback(err, data){
      if (err){
        console.log(err);
      } else {
        obj = JSON.parse(data);
        obj.table.push({id : data.length() - 1, time : date});
        json = JSON.stringify(obj);
        fs.writeFile('data.json', json);
      }
    })

    res.send({some : json});
  })

  .get('/db',function(req, res){
      res.send(json)
  })

  .post('/post', function(req, res){
    res.send('contact-successful');
  })
  
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

//uselles coment