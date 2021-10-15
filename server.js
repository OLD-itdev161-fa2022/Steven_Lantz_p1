console.log("hello")
const _dirname = "/run/media/foxm/Shared_Space/MATC/Fifth Semester/Web Prog/Project 1/Steven_Lantz_p1/index.html"
const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient
const connectionString = "mongodb+srv://fMulder:trustno1skully@cluster-p1.1vfvy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"




//Connecting to our database
MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('SW-Quotes')
    const quotesCollection = db.collection('quotes')

    //Telling express we're using EJS as a template engine
    app.set('view engine', 'ejs')
    

    //View is the name of the file that we're rendering
    //locals is the data passed into the file
    //res.render(view, locals)
    
    //Place middleware before CRUD handlers
    app.use(express.urlencoded({extended: true}))
    app.use(express.static('public'))
    

    //Express request handlers
    app.get('/', (req, res) => {
      db.collection('quotes').find().toArray()
    .then(results => {
       res.render('index.ejs', {quotes: results})
    })
    .catch(error => console.error(error))
   
    })
    
    app.post('/quotes', (req, res) => {
    quotesCollection.insertOne(req.body)
    .then(result => {
      res.redirect('/')
    })
    .catch(error => console.error(error))
    
  })
    
    app.listen(3000, function() {
    console.log('listening on 3000')
    })
    
  })
  .catch(error => console.error(error))








