const express = require('express')
const bodyParser = require('body-parser')
<<<<<<< HEAD
const urlEncoded = bodyParser.urlencoded({extended:false})

const dummyData = [];

//setting up
const app = express();


//seting template engine
=======
const urlEncoded = bodyParser.urlencoded({extended: false})

const dummyData = [];

// setting up
const app = express();

// setting template engine
>>>>>>> a49c729657e91aa5f18ee8e873e98a2e89938cd7
app.set("view engine","ejs");


// use middle ware to serve static files
app.use(express.static('./public'));


<<<<<<< HEAD
//############# ROUTES ################

//Get for tasks: returns all tasks
=======

// ############### ROUTES ##############

// Get for tasks: returns all tasks
>>>>>>> a49c729657e91aa5f18ee8e873e98a2e89938cd7
app.get('/tasks', function (req, res) {
    res.render('tasks');
});

// Post for tasks: posting a task
app.post('/tasks', urlEncoded, function(req, res){

  dummyData.push(req.body.task)
  console.log(dummyData)

});

<<<<<<< HEAD
//Post for tasks: posting a task
app.post('/tasks', urlEncoded, function(req, res){

  dummyData.push(req.body.task)
  console.log(dummyData)

});


  app.listen(3000, function(err){
=======
app.listen(3000, function(err){
>>>>>>> a49c729657e91aa5f18ee8e873e98a2e89938cd7
    if (err)
        console.log(err)
    console.log('Server is live on port 3000')
})