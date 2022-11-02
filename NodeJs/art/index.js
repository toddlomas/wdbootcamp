const figlet = require('figlet');
const colors = require('colors');

figlet('big boobz', function(err,data){
    if(err) {
        console.log('uh oh');
        return;
    }
    console.log(data.green);
    console.log(data.yellow);
    console.log(data.rainbow);
})
