import { Router } from 'express'
import { createTask, deleteTasks, getTask, getTasks, updateTasks } from '../controllers/task.controllers.js'

const router = Router()

router.get('/tasks', getTasks)
router.post('/createTask', createTask)
router.put('/task/:id', updateTasks)
router.delete('/task/:id', deleteTasks)
router.get('/task/:id', getTask)

export default router