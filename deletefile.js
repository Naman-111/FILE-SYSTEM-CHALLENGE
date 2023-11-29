const fs = require('fs');

fs.unlink('newtest.txt',(err)=> {
    if(err) throw err;
    console.log('file Deleted')

})