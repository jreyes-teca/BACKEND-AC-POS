import Sequelize from "sequelize";
import 'dotenv/config';

// clase de coneción a la base de datos

class DBInstance {
  constructor() {
    const dbConfig = {
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      password: process.env.DB_PASSWORD,
      port: "5432",
    };
    this.sequelize = new Sequelize(
      dbConfig.database,
      dbConfig.user,
      dbConfig.password,
      {
        host: dbConfig.host,
        dialect: "postgres",
        logging: false,
      });
  }
}

export default new DBInstance().sequelize;
