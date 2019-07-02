const express = require('express')
const bodyParser = require('body-parser')
const urlEncoded = bodyParser.urlencoded({extended: false})

const dummyData = [{taskItem: "Work on my portfolio" },{taskItem: "Code and watch anime"},{taskItem: "Sleep"}];

// setting up
const app = express();

// setting template engine
app.set("view engine","ejs");


// use middle ware to serve static files
app.use(express.static('./public'));

// ############### ROUTES ##############

// Get for tasks: returns all tasks
app.get('/', (req, res) => {
    // rendering tasks view and passing taskToDo data
    res.render('tasks', {taskToDo: dummyData});
});

// Post for tasks: posting a task
app.post('/tasks', urlEncoded, (req, res)=> {
    // formatting for incoming data to add to my data set
  console.log("hitting Post route");
  let incomingItem = {};
  incomingItem.taskItem = req.body.task;
  dummyData.push(incomingItem)
  res.redirect('/')
});

app.delete("/tasks/:id", (req, res) => {
    // console.log(req.params.id);
    dummyData.splice(req.params.id, 1);
    // console.log(dummyData);
    res.json(dummyData)
});

// Delete for task: deleting specific task
app.delete("/tasks/:id", (req, res) => {
    // deleting item from data set
    dummyData.splice(req.params.id, 1);
    res.redirect(dummyData)
})

app.listen(3000, (err) =>{
    if (err)
        console.log(err)
    console.log('Server is live on port 3000')
})