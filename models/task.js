// creating our task model
// setting to export becauseout index file is expecting an export of the model
module.exports = function(sequelize, DataTypes){
    var Task = sequelize.define("Task", {
        taskItem: {
            type: DataTypes.STRING, 
            allowNull: false
        },
            userId: {
                type: DataTypes.INTEGER
            }
        }

    );

    return Task
}