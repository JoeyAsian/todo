const express = require('express');
const router  = express.Router();
const todoController = require('../controllers/todo');

<<<<<<< HEAD
// parsing form data
const urlEncoded = bodyParser.urlencoded({extended: false})
=======
>>>>>>> 380ee75f960a42f98f00122865d13f157efe5bfb

// ############### ROUTES ##############

// Get for tasks: returns all tasks
router.get( '/', todoController.allTodos );

// Post for tasks: posting a task
router.post( '/tasks', todoController.addTask );

// Delete for task: deleting specify task
router.delete( "/tasks/:id", todoController.removeTask );

module.exports = router;