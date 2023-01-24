import {Sequelize} from "sequelize";
const db = new Sequelize('servnati_server','root','12345',{
    host:"192.168.10.9",
    dialect:"mysql"
});
export default db