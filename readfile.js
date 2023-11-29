const fs = require('fs');

fs.readFile('test.txt', (err, data) =>{
    console.log(data.toString())
});

fs.appendFile('createfile.js', 'Hello World',(err)=>{
    if(err) {
        console.log(err);
    }
});
