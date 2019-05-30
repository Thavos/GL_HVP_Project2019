const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

//MOJE
const fs =  require('fs')
const bodyParser = require('body-parser')

let settings = []
let items = []
let setx;

String.prototype.replaceAt = function(index, replacement){
  return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

express()
  .use(bodyParser())
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', function(req, res){
    fs.readFile('./data.json', 'utf8', function(err, data){
        if (err){
          console.log(err);
        } else {
          items = data
          res.render('pages/index', { item : items });
        }
      }
    )
  })
  .get('/about', function(req,res){
    res.render('pages/about')
  })
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
          fs.readFile('./data.json', 'utf8', function(err, data){
            if(err){
              console.log(err)
            }else{
              //ZLY IF STATMENT
              if(time > data.from && time < data.to){
                let timeToLight = JSON.parse(data).time
              }
              else{
                timeToLight = 10
              }
            }
            res.send({ Time : timeToLight })
          })
        })
      }
    })
  })
  .get('/data', function(req, res){
    items = []

    new function LoadData(){
          fs.readFile('./data.json', 'utf8', function(err, data){
          if (err){
              console.log(err);
          } else {
          items = JSON.parse(data);
          res.send(items)
          }
      })
    }
  })
  .post('/post', function(req,res){
    fs.readFile('./settings.json', 'utf8', function(err, data){
      if (err){
        console.log(err)
        res.send(err)
      } else {
        settings = JSON.parse(data)
        //console.log(settings[0].time2)
        console.log(settings) 
        let set = JSON.stringify(req.body)
        let a = JSON.parse(set)
        let time1 = a.time1.slice(0,2) + '.' + a.time1.slice(3,6)
        let time2 = a.time2.slice(0,2) + '.' + a.time2.slice(3,6)
        time1 = parseFloat(time1)
        time2 = parseFloat(time2)
        res.send(time1.toString() + ' ' + time2.toString())
      }
    })
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))