
//Create const to require using express
const express = require('express');
/*bodyParser has been deprecated
const bodyParser = require('body-parser'); //Middleware that will tidy up request object before we use them*/
const app = express();
const MongoClient = require('mongodb').MongoClient;

//Create server that browsers can connect to
app.listen(3000, ()=>{
    console.log('listening on 3000')
});

/*urlencoded method tells body-parser(now deprecated-which used to be imported from express) to 
extract data from the <form> and add them to the body property in the req obj*/
app.use(express.urlencoded({extended: true}));

//Handle get request and callback
const _dirName = "/run/media/foxm/Shared_Space/MATC/Fifth Semester/Web Prog/Project 1/Steven_Lantz_p1"

app.get('/', (req, res)=> {
   res.sendFile(_dirName + '/index.html')
});

//Handle post request
app.post('/quotes', (req, res)=> {
    console.log(req.body)
});

MongoClient.connect('mongodb-connection-string', (err, client)=>{
    //code goes here
});

mongodb+srv://fMulder:<password>@cluster-p1.1vfvy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority