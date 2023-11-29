const fs = require('fs');

//fs.readFile('test.txt', (err, data) =>{
//    console.log(data.toString())
//});

//fs.appendFile('createfile.js', 'Hello World',(err)=>{
//    if(err) {
//        console.log(err);
//    }
//});

//fs.appendFile('createfile.js','\nThis file is updated',(err) => {
//    if(err) throw err;
//    console.log('Content Appended')
//})

//fs.appendFile('newtest.txt','\nhello mr Naman Rana',(err)=>{
//    if(err) throw err;
//    console.log('Content Appended ')
//})

fs.rename('create.js','notcreate.js',(err)=> {
    if(err) throw err;
    console.log('File Renamed')
});


