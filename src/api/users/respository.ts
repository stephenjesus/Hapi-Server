// import other librart here

import sequelize from '../../sequelize-connection';
import * as _ from 'lodash';
import logger from '../../helper/logger';

// import model here
import { users } from '../../model/users';

export default class Repository {
    constructor() {
        sequelize.sync().then();
    }

    // add function promise
    public getuserlist(page: any, datalimit: number): Promise<any> {
        return new Promise((resolve, reject) => {
            const Op = sequelize.Op;
            logger.info(page, datalimit);
            users
                .findAndCountAll({
                    where: {
                        [Op.or]: [
                            {
                                rollno: 28,
                            },
                            {
                                rollno: 29,
                            },
                        ],
                        // rollno : {
                        //     [Op.gt]: 2
                        // }
                    },
                    attributes: ['name', ['mobilenumber', 'number']],
                    // offset: 10, -- first 10 element
                    limit: 2,
                })
                .then((userslist: any) => {
                    logger.info(JSON.parse(JSON.stringify(userslist)));
                    resolve({
                        message: 'users list',
                        statusCode: 200,
                        userslist,
                    });
                });
        });
    }
    // getuserbyid
    public getuserbyid(id: any): Promise<any> {
        return new Promise((resolve, reject) => {
            logger.info(id);
            users
                .findOne({
                    where: {
                        rollno: id,
                    },
                })
                .then(res => {
                    // logger.info(JSON.parse(JSON.stringify(res)));
                    resolve({
                        message: 'User found',
                        statusCode: 200,
                        res,
                    });
                })
                .catch(err => {
                    logger.info(err);
                    reject({
                        message: 'User not found',
                    });
                });
        });
    }

    // Create user
    public Createuser(payload: any): Promise<any> {
        return new Promise((resolve, reject) => {
            users
                .findOrCreate({
                    defaults: {
                        rollno: payload.rollno,
                        Name: payload.Name,
                        mobilenumber: payload.mobilenumber,
                    },
                    where: {
                        rollno: payload.rollno,
                    },
                })
                .spread((userData: any, created) => {
                    const data = userData.get({
                        plain: true,
                    });
                    if (!created) {
                        logger.info('Duplicate Entry');
                        resolve({
                            sucesss: false,
                            message: 'Dummy',
                        });
                    }
                    logger.info(data);
                })
                .then(response => {
                    resolve({
                        sucesss: true,
                        message: 'new entry',
                    });
                })
                .catch((error: any) => {
                    logger.info(error);
                    reject(error);
                });
        });
    }
    public searchuser(payload: any): Promise<any> {
        return new Promise((resolve, reject) => {
            logger.info(payload);
            const Op = sequelize.Op;
            users
                .findAll({
                    where: {
                        [Op.or]: [
                            {
                                name: {
                                    [Op.like]: '%' + payload.toLowerCase() + '%',
                                },
                            },
                            {
                                name: {
                                    [Op.like]: '%' + payload.toUpperCase() + '%',
                                },
                            },
                        ],
                    },
                })
                .then((res: any) => {
                    // logger.info(JSON.parse(JSON.stringify(res)));
                    const Data = JSON.parse(JSON.stringify(res));
                    resolve({
                        statusCode: 200,
                        message: 'Name Match found',
                        Data,
                    });
                })
                .catch(err => {
                    reject({
                        message: 'Something went wrong' + err,
                    });
                });
        });
    }
    public updateById(payload: any): Promise<any> {
        return new Promise((resolve, reject) => {
            users
                .upsert({
                    Name: payload.Name,
                    rollno: payload.rollno,
                    mobilenumber: payload.mobilenumber,
                })
                .then((res: any) => {
                    logger.info(JSON.parse(JSON.stringify(res)));
                    const upsertdata = JSON.parse(JSON.stringify(res));
                    if (upsertdata) {
                        // its belogs to primary key
                        resolve({ message: 'Successfully Stored' });
                    } else {
                        resolve({ message: 'Inserted Sucessfully' });
                    }
                })
                .catch(err => {
                    logger.info(err);
                });
        });
    }
}
