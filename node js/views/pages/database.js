import { readFile } from 'fs';

items = []

new function LoadData(){
    readFile('../../data.json', 'utf8', function(err, data){
        if (err){
            console.log(err);
        } else {
        
        return items = JSON.parse(data);
        }
    })
}