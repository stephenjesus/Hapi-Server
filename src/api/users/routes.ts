import * as Hapi from 'hapi';

import IRoute from '../../helper/route';
import Logger from '../../helper/logger';

// impot same component
import validate from './validate';
import UserController from './controller';

export default class UserRoutes implements IRoute {
    public async register(server: Hapi.Server): Promise<any> {
        return new Promise(resolve => {
            Logger.info('UserRoutes - Start adding user routes.');
            const controller = new UserController();
            // params
            server.route({
                method: 'GET',
                path: '/api/users/details/{rollno}',
                config: {
                    handler: controller.getuserbyid,
                    validate: validate.getuserbyid,
                    description: 'method that lists all user.',
                    tags: ['api', 'Users'],
                    auth: false,
                },
            });
            server.route({
                method: 'GET',
                path: '/api/users/listpage',
                config: {
                    handler: controller.getuserlist,
                    validate: validate.getuserlist,
                    description: 'method that lists all user.',
                    tags: ['api', 'Users'],
                    auth: false,
                },
            });
            server.route({
                method: 'POST',
                path: '/api/user/create',
                config: {
                    handler: controller.Createuser,
                    validate: validate.Createuser,
                    description: 'method that creates a new user.',
                    tags: ['api', 'Users'],
                    auth: false,
                },
            });
            server.route({
                method: 'POST',
                path: '/api/user/search',
                config: {
                    handler: controller.searchuser,
                    validate: validate.searchuser,
                    description: 'Method that searcch a username from list.',
                    tags: ['api', 'Users'],
                    auth: false,
                },
            });
            server.route({
                method: 'PUT',
                path: '/api/users/update',
                config: {
                    handler: controller.updateById,
                    validate: validate.updateById,
                    description: 'Method that updates a user by its id.',
                    tags: ['api', 'Users'],
                    auth: false,
                },
            });
            //     {
            //         method: 'DELETE',
            //         path: '/api/users/{id}',
            //         config: {
            //             handler: controller.deleteById,
            //             validate: validate.deleteById,
            //             description: 'Method that deletes a user by its id.',
            //             tags: ['api', 'users'],
            //             auth: false,
            //         },
            //     },

            Logger.info('UserRoutes - Finish adding user routes.');

            resolve();
        });
    }
}
