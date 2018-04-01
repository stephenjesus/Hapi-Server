import { Sequelize } from 'sequelize-typescript';
// var config = require('../config/config.json');

const sequelize = new Sequelize({
    name: 'mydb',
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '123456',
    modelPaths: [__dirname + '/model'],
    pool: {
        max: 200,
        min: 0,
        idle: 20000,
        acquire: 20000,
        evict: 5000,
        handleDisconnects: true,
    },
    retry: {
      match: [
        'Sequelize.ConnectionError',
        'Sequelize.ConnectionRefusedError',
        'Sequelize.ConnectionTimedOutError',
        'Sequelize.TimeoutError',
        '/Deadlock/i'
      ],
      max: 2 
    }
});

export default sequelize;
