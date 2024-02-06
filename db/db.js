import Sequelize from "sequelize";

// clase de coneción a la base de datos

class DBInstance {
  constructor() {
    const dbConfig = {
      user: "postgres",
      host: "localhost",
      database: "db_ac_pos",
      password: "Admin2023",
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
