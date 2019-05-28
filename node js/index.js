const fs =  require('fs')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

let items = []

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))

  .get('/get', function(req, res){
    
    fs.readFile('./data.json', 'utf8', function readFileCallback(err, data){
      if (err){
          console.log(err);
      } else {
      
      items = JSON.parse(data);
      let newDate = new Date()
      let month = newDate.getMonth()
      if(month < 10){
        month = "0" + month
      }
      
      let date = newDate.getFullYear() + '-' + month + '-' + newDate.getDate()
      let time = newDate.getHours() + ':' + newDate.getMinutes()
      
      items.push({Date : date, Time : time})
      json = JSON.stringify(items); 
      
      fs.writeFile('./data.json', json, 'utf8', function(){
        fs.readFile('./settings.json', 'utf8', function(err, data){
          if(err){
            console.log(err)
          }else{
            
          }
        })

        res.send({Date : date , Time : time})
      });
    }});
  })

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

//uselles coment