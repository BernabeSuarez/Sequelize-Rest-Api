import express from 'express'
import { sequelize } from './database/database.js'
import productRouter from './routes/projects.route.js'
import taskRouter from './routes/task.route.js'
import cors from 'cors'

async function main() {
    const app = express()
    const port = process.env.PORT

    //middlewares
    app.use(express.json())
    app.use(cors())

    app.use(productRouter)
    app.use(taskRouter)


    try {
        await sequelize.sync({ force: false });

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    app.listen(port, () => {
        console.log('Server running OK on port:', port)
    })
}


main()
