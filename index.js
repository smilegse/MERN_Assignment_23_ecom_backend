const app = require('./app');
const PORT = process.env.PORT;
app.listen(PORT,(error)=>{
    if(!error) {
        console.log('API back-end running '+ PORT)
    }else{
        console.log("Error occurred, server can't start", error); 
    }
});