//Hello WorldThis file is updated
//This file is updated


const fs = require('fs');


fs.appendFile('create.js', 'Hello World',(err)=> {
      if(err) {
            console.log(err);
      }
 });
