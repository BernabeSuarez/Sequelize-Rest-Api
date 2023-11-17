import Sequelize from "sequelize";
import dotenv from 'dotenv'


dotenv.config()

export const sequelize = new Sequelize('projectsdb', 'postgres', process.env.POSTGRES_PASS, {
    host: 'localhost',
    dialect: 'postgres',
})

//coneccion a la base de datos con sequelize