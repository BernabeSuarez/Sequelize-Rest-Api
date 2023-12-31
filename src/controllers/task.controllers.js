import { Task } from "../models/task.js";

export const getTasks = async (req, res) => {
    try {
        const task = await Task.findAll()
        res.json(task)
    } catch (error) {
        return res.json({ message: error.messge })
    }

}

export const createTask = async (req, res) => {
    try {
        const { name, done, projectId } = req.body
        const newTask = await Task.create({
            name, done, projectId
        })
        res.status(200).json(newTask)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updateTasks = async (req, res) => {
    try {
        const { id } = req.params

        const task = await Task.findByPk(id) //encuentra por primary key

        //actualiza solo el campo que venga en el body no hace falta que vengan todos los campos
        task.set(req.body)

        project.save() //guardar la actualizacion de data
        res.status(200).json(project)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
    res.send('Update project')
}

export const deleteTasks = async (req, res) => {
    try {
        const id = req.params.id
        await Task.destroy({
            where: {
                id: id
            }
        });
        res.sendStatus(204)
    } catch (error) {
        return res.json({ message: error.message })
    }
}

export const getTask = async (req, res) => {
    try {
        const id = req.params.id
        const task = await Task.findOne({
            where: {
                id
            }
        })


        res.json(task)
    } catch (error) {
        return res.json({ message: error.message })
    }
}