import sequelize from "sequelize";
import db from "../db/db.js";


const  UserModel = db.define("users", {
    id : {
        type: sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },
    fullname: {
        type: sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize.STRING,
        allowNull: false,
    },
});

export default UserModel;