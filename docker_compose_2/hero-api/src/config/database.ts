import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DB_NAME || 'database', process.env.DB_USER || 'user', process.env.DB_PASSWORD || 'password', {
  host: process.env.DB_HOST || 'db',
  dialect: 'postgres', // or 'mysql', 'sqlite', 'mssql'
  logging: false, // Set to true to see SQL queries in the console
});

export default sequelize;