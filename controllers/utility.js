const dotenv = require('dotenv');
const mysql = require('mysql');
dotenv.config();

const connection =  mysql.createConnection({
    host:process.env.SERVER_URL,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME
})

connection.connect((error)=>{
    if(error) return console.log(error);
    console.log('Connection successfully');
})

module.exports = {
    connection
}