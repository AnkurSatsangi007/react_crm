import {Sequelize} from "sequelize";
import db from "../config/DataBase";

const {DataTypes} = Sequelize;

const Users = db.define('',{
    name:{ type:DataTypes.STRING },
    userName:{ type:DataTypes.STRING },
    passWord:{ type:DataTypes.STRING },
    refresh_token:{ type:DataTypes.TEXT },
},{
    freezeTableName:true
});

(async () => {
    await db.sync();
})();

export default Users;
