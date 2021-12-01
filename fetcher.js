
const fs = require('fs');
const request = require('request');
const url = process.argv[2];
const destFileToWrite = process.argv[3];

request(url,(error,response,body)=>{
    if(response && response.statusCode){
        console.log('status code:',response && response.statusCode);
    } else {
        console.log("Resource is not available");
    }
  
    if(!error){
        fs.writeFile(destFileToWrite,body,
            {
                encoding:"utf8",
                flag:"w",
                mode:0o666
            },
            (err)=>{
            if(err){
                return console.log(err);
            } else {
                console.log("data is written successfully");
            }
        })
    }
});