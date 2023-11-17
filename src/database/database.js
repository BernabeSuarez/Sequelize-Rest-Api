import Sequelize from "sequelize";

export const sequelize = new Sequelize('projectsdb', 'postgres', 'l13d86b83a23', {
    host: 'localhost',
    dialect: 'postgres',
})

//coneccion a la base de datos con sequelize