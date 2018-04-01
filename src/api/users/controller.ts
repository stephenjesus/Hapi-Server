import * as Boom from 'boom';
import Logger from '../../helper/logger';
 
//  import  resolver 
import User from '../../model/user';
import UserResolver from './resolver';

export default class UserController {
    public resolver: any;
    constructor() {
        this.resolver = new UserResolver();
    }
}
