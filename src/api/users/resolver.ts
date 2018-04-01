import User from '../../model/user';
import Resolver from './respository';
import Repository from './respository';

export default class UserResolver {
    public repository: any;
    constructor() {
        this.repository = new Repository();
    }
}
