import mysql = require('mysql');

export default class database {
    public connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'mydb',
    });
}
