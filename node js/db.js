const fs = require('fs')

items = []

function LoadData(){
    fs.readFile('./data.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        
        return items = JSON.parse(data);
        }
    })
}