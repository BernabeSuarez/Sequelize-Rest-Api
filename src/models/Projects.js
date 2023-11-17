import { sequelize } from '../database/database.js'
import { DataTypes } from 'sequelize'
import { Task } from './task.js'


export const Project = sequelize.define('projects', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,

    },
    priority: {
        type: DataTypes.INTEGER,
    },
    description: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
})

//definir la estructura de la tabla

//relacionar las tareas con un proyecto y colocarle la id del proyecto al que pertenecen
Project.hasMany(Task, {
    foreignKey: 'projectId',
    sourceKey: 'id'
})


Task.belongsTo(Project, {
    foreignKey: 'projectId',
    targetId: 'id'
})