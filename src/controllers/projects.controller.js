import { Project } from '../models/Projects.js'
import { Task } from '../models/task.js';


export const getProjects = async (req, res) => {
    try {
        const data = await Project.findAll()
        return res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export const createProject = async (req, res) => {
    try {
        const { name, priority, description } = req.body
        const newProject = await Project.create({

            name,
            priority,
            description
        })
        res.status(200).json(newProject)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export const updateProject = async (req, res) => {
    try {
        const { id } = req.params
        const { name, priority, description } = req.body
        const project = await Project.findByPk(id) //encuentra por primary key
        //actualizar la data a lo que viene en el body
        project.name = name
        project.priority = priority
        project.description = description
        project.save() //guardar la actualizacion de data
        res.status(200).json(project)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
    res.send('Update project')
}

export const deleteProject = async (req, res) => {
    try {
        const id = req.params.id
        await Project.destroy({
            where: {
                id: id
            }
        });
        res.sendStatus(204)
    } catch (error) {
        return res.json({ message: error.message })
    }

}

export const getProject = async (req, res) => {
    try {
        const id = req.params.id
        const project = await Project.findOne({
            where: {
                id
            }
        })

        if (!project) {
            return res.status(404).json({ message: 'Proyecto Inexistente' })
        }
        res.json(project)
    } catch (error) {
        return res.json({ message: error.message })
    }

}

export const getProjectTasks = async (req, res) => {
    try {
        const { id } = req.params
        const tasks = await Task.findAll({
            where: { projectId: id }
        })
        res.status(200).json(tasks)
    } catch (error) {
        return res.json({ message: error.message })
    }

}