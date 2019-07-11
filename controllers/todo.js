exports.allTodos =  (req, res) => {
    req.context.db.Task.findAll({
        attributes: ['id', 'taskItem']
    }).then(function(results){
        // rendering tasks view and passing taskToDo data
        res.render('tasks', {taskToDo: results});
    }).catch(function(err){
        console.log(err);
        res.json(err);
    })
};   
    // console.log(req.context)
    //     let sql = 'SELECT * FROM task';
    //     req.context.db.query(sql, function (err, results) {
    //         if (err) throw err;
    //         // rendering tasks view and passing taskToDo data
    //         res.render('tasks', {taskToDo: results});
    // });
 

exports.addTask = (req, res) => {
   req.context.db.Task.create({
       taskItem: req.body.taskItem
   }).then(function(){
       res.redirect('/');
   }).catch(function(err){
       console.log(err);
       res.json(err);
   })
};
   
   
   
    // let task = req.body
    // console.log(req.body)
    // let sql = 'INSERT INTO task SET ?';
    // req.context.db.query(sql, task, function (err, results) {
    //     if (err) throw err;
    //     // rendering tasks view and passing taskToDo data
    //     console.log(results)
    //     res.redirect('/')
    // });

exports.removeTask = (req, res) => {
    req.context.db.Task.Post.destroy({
        where: {id: req.params.id}
    }).then(function(){
            res.json(results);
        }).catch(function(err){
            console.log(results);
            res.json(results);
        }) 
    };

    // let sql = 'DELETE  FROM task WHERE ID=' + req.params.id;
    // req.context.db.query(sql,(err, result) =>{
    //     if(err) throw err;
    //     console.log(result);
    //     res.json(result)
    // })