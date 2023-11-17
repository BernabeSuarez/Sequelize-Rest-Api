import express from 'express'
import { sequelize } from './database/database.js'
import productRouter from './routes/projects.route.js'
import taskRouter from './routes/task.route.js'
import cors from 'cors'

async function main() {
    const app = express()

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
    app.listen(8080, () => {
        console.log('Server running OK')
    })
}


main()
