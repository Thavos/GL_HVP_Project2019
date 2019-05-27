const mongo = require('mongodb')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

let mongoUrl = "mongodb+srv://gluser:<password>@glcluster-nzu7u.mongodb.net/test?retryWrites=true"

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))

  .get('/get', function(req, res){
    res.send({some : "other"});
  })

  .get('/db',function(req, res){
    mongo.connect(mongoUrl, function(err, db){
      var console = db.collection('users')
      collection.findOne({
          'basicInfo.firstName' : userName
        },
        function(err,result){
          if(err){
            console.err('Error');
            res.status(500).send('Error');
          }else{
            console.log('Success')
            res.status(200).json(result)
          }
        }  
      )
    })
  })

  .post('/post', function(req, res){
    res.send('contact-successful');
  })
  
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

//uselles coment